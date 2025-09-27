<?php
/**
 * Funciones utilitarias generales
 */

/**
 * Escape HTML para salida segura (alias de e() en security.php)
 */
function escape($string) {
    return htmlspecialchars($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/**
 * Formatear precio en centavos a formato legible
 */
function formatPrice($cents, $currency = 'MXN') {
    $amount = $cents / 100;
    return '$' . number_format($amount, 2) . ' ' . $currency;
}

/**
 * Generar mensaje flash
 */
function setFlash($message, $type = 'info') {
    $_SESSION['flash'] = [
        'message' => $message,
        'type' => $type
    ];
}

/**
 * Obtener y limpiar mensaje flash
 */
function getFlash() {
    if (isset($_SESSION['flash'])) {
        $flash = $_SESSION['flash'];
        unset($_SESSION['flash']);
        return $flash;
    }
    return null;
}

/**
 * Obtener URL base de la aplicación
 */
function getBaseUrl() {
    $config = require_once __DIR__ . '/../../secure/config.php';
    return rtrim($config['app']['base_url'], '/');
}

/**
 * Construir URL completa
 */
function url($path = '') {
    $baseUrl = getBaseUrl();
    $path = ltrim($path, '/');
    return $path ? "{$baseUrl}/{$path}" : $baseUrl;
}

/**
 * Verificar si el usuario está logueado
 */
function isLoggedIn() {
    return isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
}

/**
 * Obtener ID del usuario actual
 */
function getCurrentUserId() {
    return $_SESSION['user_id'] ?? null;
}

/**
 * Obtener datos del usuario actual
 */
function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }
    
    $db = getDB();
    return $db->fetchOne(
        'SELECT id, name, email, verified FROM users WHERE id = ?',
        [getCurrentUserId()]
    );
}

/**
 * Generar token aleatorio seguro
 */
function generateToken($length = 32) {
    return bin2hex(random_bytes($length));
}

/**
 * Hash de contraseña
 */
function hashPassword($password) {
    return password_hash($password, PASSWORD_ARGON2ID, [
        'memory_cost' => 65536, // 64 MB
        'time_cost' => 4,       // 4 iteraciones
        'threads' => 3,         // 3 hilos
    ]);
}

/**
 * Verificar contraseña
 */
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

/**
 * Validar política de contraseña
 */
function validatePasswordPolicy($password) {
    $config = require_once __DIR__ . '/../../secure/config.php';
    $minLength = $config['security']['password_min_length'];
    $requirements = $config['security']['password_require'];
    
    if (strlen($password) < $minLength) {
        return "La contraseña debe tener al menos {$minLength} caracteres";
    }
    
    foreach ($requirements as $req) {
        switch ($req) {
            case 'upper':
                if (!preg_match('/[A-Z]/', $password)) {
                    return "La contraseña debe contener al menos una letra mayúscula";
                }
                break;
            case 'lower':
                if (!preg_match('/[a-z]/', $password)) {
                    return "La contraseña debe contener al menos una letra minúscula";
                }
                break;
            case 'digit':
                if (!preg_match('/[0-9]/', $password)) {
                    return "La contraseña debe contener al menos un número";
                }
                break;
            case 'special':
                if (!preg_match('/[^a-zA-Z0-9]/', $password)) {
                    return "La contraseña debe contener al menos un carácter especial";
                }
                break;
        }
    }
    
    return true; // Contraseña válida
}

/**
 * Limpiar string de entrada
 */
function cleanInput($input) {
    if (is_array($input)) {
        return array_map('cleanInput', $input);
    }
    return trim(strip_tags($input));
}

/**
 * Convertir array a JSON seguro
 */
function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Obtener timestamp actual
 */
function now() {
    return date('Y-m-d H:i:s');
}

/**
 * Formatear fecha legible
 */
function formatDate($date, $format = 'd/m/Y H:i') {
    if (is_string($date)) {
        $date = new DateTime($date);
    }
    return $date->format($format);
}

/**
 * Verificar si es ambiente de desarrollo
 */
function isDevelopment() {
    $config = require_once __DIR__ . '/../../secure/config.php';
    return $config['env'] === 'sandbox';
}

/**
 * Debug helper (solo en desarrollo)
 */
function debug($data, $die = false) {
    if (!isDevelopment()) {
        return;
    }
    
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    
    if ($die) {
        die();
    }
}
