<?php
require_once __DIR__ . '/../lib/bootstrap.php';
require_once __DIR__ . '/../lib/paypal.php';

// Solo permitir POST
if (!isPost()) {
    http_response_code(405);
    die('Method not allowed');
}

// Aplicar rate limiting más permisivo para webhooks
try {
    applyRateLimit('webhook', null, 100, 3600); // 100 webhooks por hora
} catch (Exception $e) {
    // Si el rate limit falla, continuar (fail open)
    error_log("Webhook rate limit check failed: " . $e->getMessage());
}

$config = require_once __DIR__ . '/../../secure/config.php';

try {
    // Obtener headers y body
    $headers = getallheaders();
    $body = file_get_contents('php://input');
    
    // Validar webhook
    if (!validatePayPalWebhook($headers, $body)) {
        http_response_code(400);
        die('Invalid webhook');
    }
    
    // Decodificar datos del webhook
    $webhookData = json_decode($body, true);
    if (!$webhookData || !isset($webhookData['event_type'])) {
        http_response_code(400);
        die('Invalid webhook data');
    }
    
    // Log del webhook recibido
    logSecurity('webhook_received', [
        'event_type' => $webhookData['event_type'],
        'event_id' => $webhookData['id'] ?? null,
        'resource_type' => $webhookData['resource_type'] ?? null
    ]);
    
    // Procesar solo eventos de captura completada
    if ($webhookData['event_type'] !== 'PAYMENT.CAPTURE.COMPLETED') {
        http_response_code(200);
        die('Event type not processed');
    }
    
    // Obtener datos de la captura
    $captureData = $webhookData['resource'] ?? [];
    if (!$captureData || !isset($captureData['custom_id'])) {
        http_response_code(400);
        die('Missing capture data');
    }
    
    // El custom_id debería contener el orderID de PayPal
    $paypalOrderId = $captureData['custom_id'] ?? $captureData['id'] ?? null;
    if (!$paypalOrderId) {
        http_response_code(400);
        die('Missing order ID');
    }
    
    $db = getDB();
    
    // Buscar la orden en la base de datos
    $order = $db->fetchOne(
        'SELECT * FROM orders WHERE provider_order_id = ? AND status = "pending"',
        [$paypalOrderId]
    );
    
    if (!$order) {
        // Orden no encontrada o ya procesada - esto es normal (idempotencia)
        logSecurity('webhook_order_not_found', [
            'paypal_order_id' => $paypalOrderId,
            'event_id' => $webhookData['id'] ?? null
        ]);
        
        http_response_code(200);
        die('Order not found or already processed');
    }
    
    // Verificar monto
    $capturedAmount = 0;
    if (isset($captureData['amount']['value'])) {
        $capturedAmount = (int) (floatval($captureData['amount']['value']) * 100);
    }
    
    if ($capturedAmount !== $order['amount_mxn']) {
        // Marcar como fallida por monto incorrecto
        $db->update('orders', 
            ['status' => 'failed'],
            'id = ?',
            [$order['id']]
        );
        
        logSecurity('webhook_amount_mismatch', [
            'order_id' => $order['id'],
            'expected_amount' => $order['amount_mxn'],
            'captured_amount' => $capturedAmount,
            'paypal_order_id' => $paypalOrderId
        ]);
        
        http_response_code(200);
        die('Amount mismatch');
    }
    
    // Iniciar transacción para asegurar consistencia
    $db->beginTransaction();
    
    try {
        // Marcar orden como pagada
        $db->update('orders', 
            ['status' => 'paid'],
            'id = ?',
            [$order['id']]
        );
        
        // Otorgar acceso al curso
        $accessGranted = grantAccess($order['user_id'], $config['app']['course_id']);
        
        if (!$accessGranted) {
            throw new Exception('Failed to grant course access');
        }
        
        // Confirmar transacción
        $db->commit();
        
        // Log de éxito
        logSecurity('webhook_processed_success', [
            'order_id' => $order['id'],
            'user_id' => $order['user_id'],
            'paypal_order_id' => $paypalOrderId,
            'amount' => $capturedAmount,
            'event_id' => $webhookData['id'] ?? null
        ]);
        
        http_response_code(200);
        die('Webhook processed successfully');
        
    } catch (Exception $e) {
        // Revertir transacción
        $db->rollback();
        throw $e;
    }
    
} catch (Exception $e) {
    error_log("Webhook processing failed: " . $e->getMessage());
    
    logSecurity('webhook_processing_error', [
        'error' => $e->getMessage(),
        'webhook_data' => $webhookData ?? null
    ]);
    
    http_response_code(500);
    die('Webhook processing failed');
}
