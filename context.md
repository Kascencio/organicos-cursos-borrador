Caso: 1 curso con 6 videos (Google Drive preview), pago automático con PayPal (Orders API v2 + Webhooks).
Hosting final: cPanel (PHP 8.1+), MySQL.
Objetivo: Registro/Login → Pago → Activación automática → “Mis videos”.
Directriz clave: Máxima seguridad en formularios, sesiones y endpoints.

1) Estructura del módulo (dentro de cursos/)
/cursos/
  public/                       # raíz pública local (luego será public_html en cPanel)
    index.php                   # Landing del curso (CTA comprar)
    login.php
    register.php
    logout.php
    mis-videos.php              # área privada (gating por pago)
    success.php                 # página pospago
    cancel.php

    checkout/
      create-order.php          # POST -> PayPal Orders API: crea orden
      capture-order.php         # POST -> PayPal Orders API: captura y valida

    webhook/
      paypal.php                # Webhook: PAYMENT.CAPTURE.COMPLETED

    lib/
      db.php                    # conexión PDO (excepciones, modo estricto)
      auth.php                  # sesiones, login, registro, logout, password policy
      access.php                # concede/verifica acceso a course_id=1
      csrf.php                  # CSRF tokens (session + double submit)
      validate.php              # validaciones server-side (email, password, IDs)
      rate_limit.php            # limiter por IP/usuario/endpoint
      security.php              # headers (CSP, HSTS, XFO...), sanitización, helpers
      utils.php                 # helpers generales

    assets/                     # CSS/JS/imagenes (sin secrets)
    .htaccess                   # reglas seguridad (dir listing off, deny internal)

  secure/                       # FUERA de public/ (en cPanel: fuera de public_html)
    config.php                  # credenciales (DB, PayPal), base_url, course_id
    cache/                      # tokens OAuth2 de PayPal (si se cachean en file)
    vendor/                     # si se usa algún lib/SDK no expuesto al público

  sql/
    schema.sql                  # tablas (users, orders, user_access, videos)
    seed_videos.sql             # 6 videos (drive_file_id, title, ord)

  README.md                     # instrucciones locales y despliegue a cPanel


En local, sirve cursos/public/ con el servidor embebido de PHP:
php -S 127.0.0.1:8080 -t cursos/public

2) Configuración (secure/config.php)
<?php
return [
  'env' => 'sandbox', // 'live' en producción
  'app' => [
    'base_url'  => 'http://127.0.0.1:8080', // en cPanel: https://midominio.com
    'course_id' => 1,
  ],
  'db' => [
    'dsn'  => 'mysql:host=localhost;dbname=cursos;charset=utf8mb4',
    'user' => 'usuario_db',
    'pass' => 'password_db',
  ],
  'paypal' => [
    'client_id' => 'PAYPAL_CLIENT_ID',
    'secret'    => 'PAYPAL_SECRET',
    'base_api'  => 'https://api-m.sandbox.paypal.com', // live: https://api-m.paypal.com
    'webhook_id'=> 'WEBHOOK_ID_OPCIONAL_PARA_VERIFICACION',
  ],
  'security' => [
    'session_name'        => 'CURSOSSESSID',
    'session_secure'      => false, // true en producción (HTTPS)
    'session_httponly'    => true,
    'session_samesite'    => 'Strict',
    'password_min_length' => 10,
    'password_require'    => ['upper','lower','digit'], // define política
    'rate_limit'          => ['window_sec'=>900, 'max_hits'=>20], // 20 req/15 min por endpoint
    'csp_nonce_len'       => 24
  ]
];

3) Esquema de base de datos (MVP)
-- sql/schema.sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  pass_hash CHAR(60) NOT NULL,
  verified TINYINT(1) DEFAULT 1,              -- opcional: verificación de email
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  provider VARCHAR(50) NOT NULL DEFAULT 'paypal',
  provider_order_id VARCHAR(191) UNIQUE,      -- PayPal orderID
  amount_mxn INT NOT NULL,
  status ENUM('pending','paid','failed') DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE user_access (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  granted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_user_course (user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  drive_file_id VARCHAR(128) NOT NULL,        -- validar formato: ^[a-zA-Z0-9_-]+$
  ord INT DEFAULT 1
) ENGINE=InnoDB;


Seed de videos (6 filas):

-- sql/seed_videos.sql
INSERT INTO videos (course_id, title, description, drive_file_id, ord) VALUES
(1,'Lección 1','', 'DRIVE_ID_1',1),
(1,'Lección 2','', 'DRIVE_ID_2',2),
(1,'Lección 3','', 'DRIVE_ID_3',3),
(1,'Lección 4','', 'DRIVE_ID_4',4),
(1,'Lección 5','', 'DRIVE_ID_5',5),
(1,'Lección 6','', 'DRIVE_ID_6',6);

4) Flujo funcional (resumen)

Registro/Login (hash seguro, CSRF, rate limit)

Pago PayPal (JS SDK):

create-order.php → crea orden (amount MXN).

capture-order.php → captura; si COMPLETED, marca orders.paid y concede acceso (user_access).

Webhook (webhook/paypal.php): idempotente; en PAYMENT.CAPTURE.COMPLETED asegura el estado paid y el acceso (por si el usuario no regresa a success.php).

Mis videos: requiere sesión + registro en user_access. Embeds de Drive /preview con fallback /view.

5) Seguridad — lineamientos obligatorios
5.1 Formularios (registro/login)

CSRF: token por formulario (sesión + double submit cookie opcional), verificar en POST.

Validación servidor (no confiar en JS):

Emails: filtro estricto + normalización (lowercase, trim).

Password policy (longitud mínima + clases de caracteres).

Campos name: whitelist de caracteres (/^[\p{L}\p{M}\s'.-]{2,100}$/u).

Rate limit por IP/usuario/endpoint: p.ej. 5 intentos login/15 min → bloqueo temporal.

Mensajes de error genéricos (no revelar si el email existe).

Salida: siempre escape HTML (htmlspecialchars) al pintar valores.

Captcha/Honeypot (opcional): añadir un campo oculto que bots llenan → rechazar.

5.2 Sesiones/Cookies

session_name propio; cookie_secure=true (en prod), httponly=true, samesite=Strict.

session.use_strict_mode=1, regenerar ID en login/logout.

Invalida sesión al cerrar sesión y en cambios de privilegio.

5.3 SQL/ORM

PDO con prepared statements SIEMPRE; PDO::ATTR_ERRMODE=EXCEPTION.

Usuario DB con mínimos privilegios (CRUD sobre la base, sin SUPER).

Sanitizar IDs (int cast) y drive_file_id (/^[a-zA-Z0-9_-]+$/).

5.4 Cabeceras y políticas

CSP (Content-Security-Policy) con nonce para <script> propios:

default-src 'self'; frame-src https://*.paypal.com https://drive.google.com; script-src 'self' 'nonce-<RANDOM>' https://www.paypal.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-ancestors 'none'; base-uri 'self';

X-Frame-Options: DENY, Referrer-Policy: strict-origin-when-cross-origin, X-Content-Type-Options: nosniff.

HSTS en producción (con HTTPS): Strict-Transport-Security: max-age=15552000; includeSubDomains.

5.5 Webhook PayPal

Validar firma del webhook (headers y/o verificación contra PayPal).

Lógica idempotente: si la orden ya está paid, no repetir efectos.

Registrar provider_order_id, monto, estado y timestamps.

5.6 Archivos/Directorio

En public/.htaccess:

Options -Indexes

Bloquear acceso directo a /lib, /secure si por alguna razón vivieran dentro de public.

Nunca subir config.php a una ruta pública.

5.7 Errores/Logs

display_errors=Off en prod; logs en archivo fuera de public.

Sanitizar datos en logs (no loguear tokens, secretos ni contraseñas).

6) Embeds de Google Drive
// mis-videos.php (fragmento de render)
$fileId = $video['drive_file_id']; // validado con regex en lectura
?>
<iframe
  src="https://drive.google.com/file/d/<?= htmlspecialchars($fileId) ?>/preview"
  allow="autoplay; encrypted-media"
  allowfullscreen
  style="width:100%; aspect-ratio:16/9; border:0;">
</iframe>
<p>
  Si no ves el reproductor, 
  <a href="https://drive.google.com/file/d/<?= htmlspecialchars($fileId) ?>/view" target="_blank" rel="noopener">abre el video aquí</a>.
</p>
<?php


Asegurar en Drive: “Anyone with the link – Viewer” para que cargue el preview sin login.

7) Pasos que debe ejecutar Cursor (tareas)

Crear estructura de carpetas/archivos bajo cursos/ como arriba.

Generar sql/schema.sql y sql/seed_videos.sql; crear un script bin/init_db.php para aplicar schema/seed en local.

Implementar secure/config.php (lectura con require).

Implementar lib/db.php (PDO), lib/auth.php (login, registro, logout, hashing), lib/csrf.php, lib/validate.php, lib/rate_limit.php, lib/security.php (headers CSP y nonce), lib/access.php.

Agregar en todas las páginas públicas:

Inicio de sesión de sesión segura (session_start con parámetros de config.security).

CSP con nonce y cabeceras de seguridad.

Validación de CSRF en cada POST.

Reescribir vistas de Next a PHP manteniendo estilos; usar escape de salida estricto.

Integrar PayPal JS SDK en index.php (o página de compra) con client-id sandbox y currency=MXN.

Implementar checkout/create-order.php y checkout/capture-order.php (OAuth2 helper para token, manejo de errores).

Implementar webhook/paypal.php con verificación de firma e idempotencia.

Implementar mis-videos.php con verificación de user_access y listado de 6 lecciones desde DB.

Añadir rate limiting a endpoints sensibles (login, create-order, capture).

QA en local (sandbox PayPal) con casos: éxito, cancelado, doble intento, webhook tardío.

Checklist de despliegue a cPanel (ver abajo).

8) Checklist de despliegue a cPanel

Crear DB y usuario en cPanel; importar schema.sql y seed_videos.sql.

Subir public/ → a public_html/ (o subcarpeta), y secure/ → fuera de public_html.

Configurar HTTPS (AutoSSL) y cambiar config.app.base_url.

En PayPal: pasar a live, actualizar client_id, secret, base_api, webhook_id.

Activar HSTS, verificar CSP y rutas de PayPal/Drive permitidas.

Probar Orders/Capture en live con una compra real de bajo monto.

9) Criterios de aceptación (seguridad + funcional)

No hay rutas públicas que filtren info sensible.

Todos los POST críticos tienen CSRF verificado y rate limit.

Los inputs se validan y la salida se escapa correctamente.

Sesiones con cookies seguras y regeneración en login.

Webhook válidamente firmado y idempotente.

Usuario puede registrarse, pagar y ver 6 videos; sin pago, no hay acceso.