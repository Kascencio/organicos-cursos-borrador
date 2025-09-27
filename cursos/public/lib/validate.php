<?php
/**
 * Validaciones del lado del servidor
 * Funciones de validación robustas para todos los inputs
 */

/**
 * Validar email
 */
function validateEmail($email) {
    if (empty($email)) {
        return ['valid' => false, 'error' => 'El email es requerido'];
    }
    
    $email = trim(strtolower($email));
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['valid' => false, 'error' => 'Formato de email inválido'];
    }
    
    // Verificar longitud
    if (strlen($email) > 120) {
        return ['valid' => false, 'error' => 'El email es demasiado largo'];
    }
    
    // Verificar caracteres peligrosos
    if (preg_match('/[<>"\']/', $email)) {
        return ['valid' => false, 'error' => 'El email contiene caracteres no permitidos'];
    }
    
    return ['valid' => true, 'value' => $email];
}

/**
 * Validar nombre
 */
function validateName($name) {
    if (empty($name)) {
        return ['valid' => false, 'error' => 'El nombre es requerido'];
    }
    
    $name = trim($name);
    
    // Verificar longitud
    if (strlen($name) < 2) {
        return ['valid' => false, 'error' => 'El nombre debe tener al menos 2 caracteres'];
    }
    
    if (strlen($name) > 100) {
        return ['valid' => false, 'error' => 'El nombre es demasiado largo'];
    }
    
    // Verificar caracteres permitidos (letras, espacios, apostrofes, puntos, guiones)
    if (!preg_match('/^[\p{L}\p{M}\s\'.-]+$/u', $name)) {
        return ['valid' => false, 'error' => 'El nombre contiene caracteres no permitidos'];
    }
    
    // Verificar que no sean solo espacios o caracteres especiales
    if (preg_match('/^[\s\'.-]+$/', $name)) {
        return ['valid' => false, 'error' => 'El nombre debe contener al menos una letra'];
    }
    
    return ['valid' => true, 'value' => $name];
}

/**
 * Validar contraseña
 */
function validatePassword($password, $confirmPassword = null) {
    if (empty($password)) {
        return ['valid' => false, 'error' => 'La contraseña es requerida'];
    }
    
    // Validar política de contraseña
    $policyResult = validatePasswordPolicy($password);
    if ($policyResult !== true) {
        return ['valid' => false, 'error' => $policyResult];
    }
    
    // Verificar confirmación si se proporciona
    if ($confirmPassword !== null && $password !== $confirmPassword) {
        return ['valid' => false, 'error' => 'Las contraseñas no coinciden'];
    }
    
    return ['valid' => true, 'value' => $password];
}

/**
 * Validar ID numérico
 */
function validateId($id, $min = 1, $max = null) {
    if (empty($id)) {
        return ['valid' => false, 'error' => 'ID requerido'];
    }
    
    if (!is_numeric($id)) {
        return ['valid' => false, 'error' => 'ID debe ser numérico'];
    }
    
    $id = (int) $id;
    
    if ($id < $min) {
        return ['valid' => false, 'error' => "ID debe ser mayor o igual a {$min}"];
    }
    
    if ($max !== null && $id > $max) {
        return ['valid' => false, 'error' => "ID debe ser menor o igual a {$max}"];
    }
    
    return ['valid' => true, 'value' => $id];
}

/**
 * Validar drive_file_id
 */
function validateDriveFileId($fileId) {
    if (empty($fileId)) {
        return ['valid' => false, 'error' => 'ID de archivo requerido'];
    }
    
    // Verificar longitud
    if (strlen($fileId) > 128) {
        return ['valid' => false, 'error' => 'ID de archivo demasiado largo'];
    }
    
    // Verificar formato (solo letras, números, guiones y guiones bajos)
    if (!preg_match('/^[a-zA-Z0-9_-]+$/', $fileId)) {
        return ['valid' => false, 'error' => 'ID de archivo contiene caracteres no permitidos'];
    }
    
    return ['valid' => true, 'value' => $fileId];
}

/**
 * Validar monto de pago
 */
function validateAmount($amount) {
    if (empty($amount)) {
        return ['valid' => false, 'error' => 'Monto requerido'];
    }
    
    if (!is_numeric($amount)) {
        return ['valid' => false, 'error' => 'Monto debe ser numérico'];
    }
    
    $amount = (int) $amount;
    
    // Verificar rango razonable (1 centavo a 1,000,000 centavos = $10,000)
    if ($amount < 1 || $amount > 100000000) {
        return ['valid' => false, 'error' => 'Monto fuera del rango permitido'];
    }
    
    return ['valid' => true, 'value' => $amount];
}

/**
 * Validar token CSRF
 */
function validateCsrfToken($token) {
    if (empty($token)) {
        return ['valid' => false, 'error' => 'Token CSRF requerido'];
    }
    
    if (!validateCsrfToken($token)) {
        return ['valid' => false, 'error' => 'Token CSRF inválido'];
    }
    
    return ['valid' => true, 'value' => $token];
}

/**
 * Validar datos de registro
 */
function validateRegistrationData($data) {
    $errors = [];
    
    // Validar nombre
    $nameResult = validateName($data['name'] ?? '');
    if (!$nameResult['valid']) {
        $errors['name'] = $nameResult['error'];
    }
    
    // Validar email
    $emailResult = validateEmail($data['email'] ?? '');
    if (!$emailResult['valid']) {
        $errors['email'] = $emailResult['error'];
    }
    
    // Validar contraseña
    $passwordResult = validatePassword($data['password'] ?? '', $data['confirm_password'] ?? null);
    if (!$passwordResult['valid']) {
        $errors['password'] = $passwordResult['error'];
    }
    
    // Validar CSRF
    $csrfResult = validateCsrfToken($data['csrf_token'] ?? '');
    if (!$csrfResult['valid']) {
        $errors['csrf_token'] = $csrfResult['error'];
    }
    
    return [
        'valid' => empty($errors),
        'errors' => $errors,
        'data' => [
            'name' => $nameResult['value'] ?? '',
            'email' => $emailResult['value'] ?? '',
            'password' => $passwordResult['value'] ?? ''
        ]
    ];
}

/**
 * Validar datos de login
 */
function validateLoginData($data) {
    $errors = [];
    
    // Validar email
    $emailResult = validateEmail($data['email'] ?? '');
    if (!$emailResult['valid']) {
        $errors['email'] = $emailResult['error'];
    }
    
    // Validar contraseña (solo verificar que no esté vacía)
    if (empty($data['password'])) {
        $errors['password'] = 'La contraseña es requerida';
    }
    
    // Validar CSRF
    $csrfResult = validateCsrfToken($data['csrf_token'] ?? '');
    if (!$csrfResult['valid']) {
        $errors['csrf_token'] = $csrfResult['error'];
    }
    
    return [
        'valid' => empty($errors),
        'errors' => $errors,
        'data' => [
            'email' => $emailResult['value'] ?? '',
            'password' => $data['password'] ?? ''
        ]
    ];
}

/**
 * Sanitizar entrada para prevenir XSS
 */
function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    
    if (is_string($input)) {
        // Remover tags HTML y caracteres de control
        $input = strip_tags($input);
        $input = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $input);
        return trim($input);
    }
    
    return $input;
}
