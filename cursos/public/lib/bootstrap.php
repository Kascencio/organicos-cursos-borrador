<?php
/**
 * Bootstrap común para todas las páginas
 * Inicializa sesiones, configuración de seguridad y carga librerías
 */

// Prevenir acceso directo
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    die('Acceso directo no permitido');
}

// Configurar manejo de errores
error_reporting(E_ALL);
ini_set('display_errors', 0); // Cambiar a 1 en desarrollo si es necesario
ini_set('log_errors', 1);

// Cargar configuración
$config = require_once __DIR__ . '/../../secure/config.php';

// Inicializar sesión segura
require_once __DIR__ . '/security.php';
initSecureSession();

// Cargar librerías core
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/utils.php';
require_once __DIR__ . '/csrf.php';
require_once __DIR__ . '/validate.php';
require_once __DIR__ . '/rate_limit.php';
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/access.php';

// Configurar headers de seguridad
$nonce = setSecurityHeaders();

// Función helper para obtener nonce
function getNonce() {
    return $_SESSION['csp_nonce'] ?? '';
}

// Configurar zona horaria
date_default_timezone_set('America/Mexico_City');

// Limpiar rate limits expirados ocasionalmente
if (rand(1, 100) === 1) {
    cleanupExpiredRateLimits();
}
