<?php
/**
 * Funciones de seguridad globales
 * Headers de seguridad, CSP, sanitización y helpers de seguridad
 */

// Cargar configuración
$config = require_once __DIR__ . '/../../secure/config.php';

/**
 * Generar nonce para CSP
 */
function generateNonce() {
    global $config;
    return base64_encode(random_bytes($config['security']['csp_nonce_len']));
}

/**
 * Configurar headers de seguridad
 */
function setSecurityHeaders() {
    global $config;
    
    // Headers básicos de seguridad
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('X-XSS-Protection: 1; mode=block');
    
    // HSTS solo en producción con HTTPS
    if ($config['env'] === 'live' && isset($_SERVER['HTTPS'])) {
        header('Strict-Transport-Security: max-age=15552000; includeSubDomains');
    }
    
    // Content Security Policy
    $nonce = generateNonce();
    $_SESSION['csp_nonce'] = $nonce;
    
    $csp = [
        "default-src 'self'",
        "script-src 'self' 'nonce-{$nonce}' https://www.paypal.com https://www.paypalobjects.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://drive.google.com https://*.googleusercontent.com",
        "frame-src https://*.paypal.com https://drive.google.com",
        "connect-src 'self' https://api-m.sandbox.paypal.com https://api-m.paypal.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
    ];
    
    header("Content-Security-Policy: " . implode('; ', $csp));
    
    return $nonce;
}

/**
 * Obtener nonce actual para scripts
 */
function getNonce() {
    return $_SESSION['csp_nonce'] ?? '';
}

/**
 * Sanitizar entrada de usuario
 */
function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    return trim(strip_tags($input));
}

/**
 * Escape HTML para salida segura
 */
function e($string) {
    return htmlspecialchars($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/**
 * Validar y sanitizar email
 */
function validateEmail($email) {
    $email = trim(strtolower($email));
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : false;
}

/**
 * Validar y sanitizar nombre
 */
function validateName($name) {
    $name = trim($name);
    if (preg_match('/^[\p{L}\p{M}\s\'.-]{2,100}$/u', $name)) {
        return $name;
    }
    return false;
}

/**
 * Validar ID numérico
 */
function validateId($id) {
    return filter_var($id, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
}

/**
 * Validar drive_file_id
 */
function validateDriveFileId($fileId) {
    return preg_match('/^[a-zA-Z0-9_-]+$/', $fileId) ? $fileId : false;
}

/**
 * Log de seguridad
 */
function logSecurity($action, $details = [], $userId = null) {
    try {
        $db = getDB();
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
        
        $db->insert('security_logs', [
            'user_id' => $userId,
            'ip_address' => $ip,
            'action' => $action,
            'details' => json_encode($details),
            'created_at' => date('Y-m-d H:i:s')
        ]);
    } catch (Exception $e) {
        error_log("Security log failed: " . $e->getMessage());
    }
}

/**
 * Verificar si la petición es POST
 */
function isPost() {
    return $_SERVER['REQUEST_METHOD'] === 'POST';
}

/**
 * Verificar si la petición es AJAX
 */
function isAjax() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && 
           strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}

/**
 * Redirigir de forma segura
 */
function redirect($url, $statusCode = 302) {
    // Validar que la URL es relativa o del mismo dominio
    if (parse_url($url, PHP_URL_HOST) && 
        parse_url($url, PHP_URL_HOST) !== $_SERVER['HTTP_HOST']) {
        $url = '/';
    }
    
    header("Location: {$url}", true, $statusCode);
    exit;
}

/**
 * Obtener IP real del cliente (considerando proxies)
 */
function getRealIp() {
    $headers = [
        'HTTP_CF_CONNECTING_IP',     // Cloudflare
        'HTTP_X_FORWARDED_FOR',      // Proxy
        'HTTP_X_FORWARDED',          // Proxy
        'HTTP_X_CLUSTER_CLIENT_IP',  // Cluster
        'HTTP_FORWARDED_FOR',        // Proxy
        'HTTP_FORWARDED',            // Proxy
        'REMOTE_ADDR'                // Directo
    ];
    
    foreach ($headers as $header) {
        if (!empty($_SERVER[$header])) {
            $ips = explode(',', $_SERVER[$header]);
            $ip = trim($ips[0]);
            
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

/**
 * Inicializar sesión segura
 */
function initSecureSession() {
    global $config;
    
    // Configurar parámetros de sesión
    $sessionConfig = $config['security'];
    
    ini_set('session.name', $sessionConfig['session_name']);
    ini_set('session.cookie_httponly', $sessionConfig['session_httponly'] ? 1 : 0);
    ini_set('session.cookie_secure', $sessionConfig['session_secure'] ? 1 : 0);
    ini_set('session.use_strict_mode', 1);
    
    if ($sessionConfig['session_samesite']) {
        ini_set('session.cookie_samesite', $sessionConfig['session_samesite']);
    }
    
    // Iniciar sesión
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    
    // Regenerar ID de sesión periódicamente (cada 30 minutos)
    if (!isset($_SESSION['last_regeneration'])) {
        $_SESSION['last_regeneration'] = time();
    } elseif (time() - $_SESSION['last_regeneration'] > 1800) {
        session_regenerate_id(true);
        $_SESSION['last_regeneration'] = time();
    }
}
