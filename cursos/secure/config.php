<?php
/**
 * Configuración del sistema de cursos
 * Este archivo contiene todas las configuraciones sensibles
 * NUNCA debe estar en una ruta pública
 */
return [
  'env' => 'sandbox', // 'live' en producción
  
  'app' => [
    'base_url'  => 'http://127.0.0.1:8080', // en cPanel: https://midominio.com
    'course_id' => 1,
    'currency'  => 'MXN',
    'amount'    => 1500, // precio en centavos (15.00 MXN)
  ],
  
  'db' => [
    'dsn'  => 'mysql:host=localhost;dbname=cursos;charset=utf8mb4',
    'user' => 'cursos_user',
    'pass' => 'cursos_pass_2024!',
  ],
  
  'paypal' => [
    'client_id' => 'BAAipD-neAwq8ipyuWBvR2fuwvHBZXSH01lloe6EczcKmt4VSmr_FdUCZ-2sWm7Hn1hGs_s0OZmXE7PTVI',
    'secret'    => 'TU_SECRET_AQUI', // Obtener del dashboard de PayPal
    'base_api'  => 'https://api-m.sandbox.paypal.com', // live: https://api-m.paypal.com
    'webhook_id' => 'WEBHOOK_ID_OPCIONAL',
    'return_url' => '/success.php',
    'cancel_url' => '/cancel.php',
    'hosted_button_id' => 'DBG5YUH74U5A6', // Botón hosted de PayPal
  ],
  
  'security' => [
    'session_name'        => 'CURSOSSESSID',
    'session_secure'      => false, // true en producción (HTTPS)
    'session_httponly'    => true,
    'session_samesite'    => 'Strict',
    'password_min_length' => 10,
    'password_require'    => ['upper','lower','digit'], // define política
    'rate_limit'          => ['window_sec'=>900, 'max_hits'=>20], // 20 req/15 min por endpoint
    'csp_nonce_len'       => 24,
    'max_login_attempts'  => 5,
    'lockout_duration'    => 900, // 15 minutos
  ]
];
