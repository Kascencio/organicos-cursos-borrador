<?php
require_once __DIR__ . '/../lib/bootstrap.php';
require_once __DIR__ . '/../lib/paypal.php';

// Solo permitir POST
if (!isPost()) {
    http_response_code(405);
    jsonResponse(['error' => 'Método no permitido'], 405);
}

// Aplicar rate limiting
applyRateLimit('capture_order');

// Verificar autenticación
requireLogin();

// Validar CSRF
validateCsrfRequest();

$config = require_once __DIR__ . '/../../secure/config.php';
$userId = getCurrentUserId();

try {
    // Obtener datos del POST
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input || !isset($input['orderID'])) {
        jsonResponse(['error' => 'OrderID requerido'], 400);
    }
    
    $paypalOrderId = $input['orderID'];
    
    // Verificar que la orden pertenece al usuario
    $db = getDB();
    $order = $db->fetchOne(
        'SELECT * FROM orders 
         WHERE provider_order_id = ? AND user_id = ? AND status = "pending"',
        [$paypalOrderId, $userId]
    );
    
    if (!$order) {
        jsonResponse(['error' => 'Orden no encontrada o ya procesada'], 404);
    }
    
    // Capturar orden en PayPal
    $captureResult = capturePayPalOrder($paypalOrderId);
    
    if (!$captureResult || $captureResult['status'] !== 'COMPLETED') {
        // Marcar como fallida
        $db->update('orders', 
            ['status' => 'failed'],
            'id = ?',
            [$order['id']]
        );
        
        logSecurity('order_capture_failed', [
            'user_id' => $userId,
            'order_id' => $order['id'],
            'paypal_order_id' => $paypalOrderId,
            'paypal_status' => $captureResult['status'] ?? 'unknown'
        ], $userId);
        
        jsonResponse(['error' => 'Error al procesar el pago'], 400);
    }
    
    // Verificar monto capturado
    $capturedAmount = 0;
    if (isset($captureResult['purchase_units'][0]['payments']['captures'][0]['amount']['value'])) {
        $capturedAmount = (int) (floatval($captureResult['purchase_units'][0]['payments']['captures'][0]['amount']['value']) * 100);
    }
    
    if ($capturedAmount !== $order['amount_mxn']) {
        // Marcar como fallida por monto incorrecto
        $db->update('orders', 
            ['status' => 'failed'],
            'id = ?',
            [$order['id']]
        );
        
        logSecurity('order_amount_mismatch', [
            'user_id' => $userId,
            'order_id' => $order['id'],
            'expected_amount' => $order['amount_mxn'],
            'captured_amount' => $capturedAmount
        ], $userId);
        
        jsonResponse(['error' => 'Error en el monto del pago'], 400);
    }
    
    // Marcar orden como pagada
    $db->update('orders', 
        ['status' => 'paid'],
        'id = ?',
        [$order['id']]
    );
    
    // Otorgar acceso al curso
    $accessGranted = grantAccess($userId, $config['app']['course_id']);
    
    if (!$accessGranted) {
        // Log error pero no fallar la transacción
        logSecurity('access_grant_failed', [
            'user_id' => $userId,
            'order_id' => $order['id'],
            'course_id' => $config['app']['course_id']
        ], $userId);
    }
    
    // Log de éxito
    logSecurity('order_captured_success', [
        'user_id' => $userId,
        'order_id' => $order['id'],
        'paypal_order_id' => $paypalOrderId,
        'amount' => $capturedAmount,
        'access_granted' => $accessGranted
    ], $userId);
    
    jsonResponse([
        'success' => true,
        'message' => 'Pago procesado exitosamente',
        'access_granted' => $accessGranted
    ]);
    
} catch (Exception $e) {
    error_log("Capture order failed: " . $e->getMessage());
    
    logSecurity('order_capture_error', [
        'user_id' => $userId,
        'paypal_order_id' => $paypalOrderId ?? null,
        'error' => $e->getMessage()
    ], $userId);
    
    jsonResponse(['error' => 'Error interno del servidor'], 500);
}
