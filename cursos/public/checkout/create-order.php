<?php
require_once __DIR__ . '/../lib/bootstrap.php';
require_once __DIR__ . '/../lib/paypal.php';

// Solo permitir POST
if (!isPost()) {
    http_response_code(405);
    jsonResponse(['error' => 'Método no permitido'], 405);
}

// Aplicar rate limiting
applyRateLimit('create_order');

// Verificar autenticación
requireLogin();

// Validar CSRF
validateCsrfRequest();

$config = require_once __DIR__ . '/../../secure/config.php';
$userId = getCurrentUserId();

try {
    // Obtener datos del POST
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input || !isset($input['amount'])) {
        jsonResponse(['error' => 'Datos de petición inválidos'], 400);
    }
    
    $amount = (int) $input['amount'];
    if ($amount !== $config['app']['amount']) {
        jsonResponse(['error' => 'Monto inválido'], 400);
    }
    
    // Verificar que no tenga acceso ya
    if (hasAccess($userId, $config['app']['course_id'])) {
        jsonResponse(['error' => 'Ya tienes acceso a este curso'], 400);
    }
    
    // Verificar que no tenga una orden pendiente reciente
    $db = getDB();
    $existingOrder = $db->fetchOne(
        'SELECT id, created_at FROM orders 
         WHERE user_id = ? AND status = "pending" 
         AND created_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)',
        [$userId]
    );
    
    if ($existingOrder) {
        jsonResponse(['error' => 'Ya tienes una orden pendiente. Espera un momento e intenta nuevamente.'], 400);
    }
    
    // Crear orden en PayPal
    $paypalOrder = createPayPalOrder(
        $amount,
        $config['app']['currency'],
        'Curso de Ganadería Regenerativa - Pijije Regenerativo'
    );
    
    if (!$paypalOrder || !isset($paypalOrder['id'])) {
        throw new Exception('Error al crear orden en PayPal');
    }
    
    // Guardar orden en base de datos
    $orderId = $db->insert('orders', [
        'user_id' => $userId,
        'provider' => 'paypal',
        'provider_order_id' => $paypalOrder['id'],
        'amount_mxn' => $amount,
        'currency' => $config['app']['currency'],
        'status' => 'pending',
        'created_at' => now()
    ]);
    
    // Log de seguridad
    logSecurity('order_created', [
        'user_id' => $userId,
        'order_id' => $orderId,
        'paypal_order_id' => $paypalOrder['id'],
        'amount' => $amount
    ], $userId);
    
    // Devolver orderID para PayPal
    jsonResponse([
        'success' => true,
        'orderID' => $paypalOrder['id']
    ]);
    
} catch (Exception $e) {
    error_log("Create order failed: " . $e->getMessage());
    
    logSecurity('order_creation_failed', [
        'user_id' => $userId ?? null,
        'error' => $e->getMessage(),
        'amount' => $amount ?? null
    ], $userId ?? null);
    
    jsonResponse(['error' => 'Error interno del servidor'], 500);
}
