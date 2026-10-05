<?php

// Display errors during boot for easier troubleshooting on Vercel preview
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

// Prepare writable storage & cache directories in /tmp for Vercel Serverless
$storagePath = '/tmp/storage';

$dirs = [
    $storagePath . '/framework/views',
    $storagePath . '/framework/cache',
    $storagePath . '/framework/cache/data',
    $storagePath . '/framework/sessions',
    $storagePath . '/logs',
    $storagePath . '/app/public',
    $storagePath . '/bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
}

// Redirect storage and bootstrap cache paths to /tmp
putenv("LARAVEL_STORAGE_PATH={$storagePath}");
$_ENV['LARAVEL_STORAGE_PATH'] = $storagePath;
$_SERVER['LARAVEL_STORAGE_PATH'] = $storagePath;

$bootstrapCache = $storagePath . '/bootstrap/cache';
putenv("APP_SERVICES_CACHE={$bootstrapCache}/services.php");
putenv("APP_PACKAGES_CACHE={$bootstrapCache}/packages.php");
putenv("APP_CONFIG_CACHE={$bootstrapCache}/config.php");
putenv("APP_ROUTES_CACHE={$bootstrapCache}/routes.php");
putenv("APP_EVENTS_CACHE={$bootstrapCache}/events.php");
putenv("VIEW_COMPILED_PATH={$storagePath}/framework/views");

$_ENV['APP_SERVICES_CACHE'] = "{$bootstrapCache}/services.php";
$_ENV['APP_PACKAGES_CACHE'] = "{$bootstrapCache}/packages.php";
$_ENV['APP_CONFIG_CACHE'] = "{$bootstrapCache}/config.php";
$_ENV['APP_ROUTES_CACHE'] = "{$bootstrapCache}/routes.php";
$_ENV['APP_EVENTS_CACHE'] = "{$bootstrapCache}/events.php";
$_ENV['VIEW_COMPILED_PATH'] = "{$storagePath}/framework/views";

$_SERVER['APP_SERVICES_CACHE'] = "{$bootstrapCache}/services.php";
$_SERVER['APP_PACKAGES_CACHE'] = "{$bootstrapCache}/packages.php";
$_SERVER['APP_CONFIG_CACHE'] = "{$bootstrapCache}/config.php";
$_SERVER['APP_ROUTES_CACHE'] = "{$bootstrapCache}/routes.php";
$_SERVER['APP_EVENTS_CACHE'] = "{$bootstrapCache}/events.php";
$_SERVER['VIEW_COMPILED_PATH'] = "{$storagePath}/framework/views";

// Auto-detect APP_URL for Vercel preview domains if not set
if (!getenv('APP_URL') && isset($_SERVER['HTTP_HOST'])) {
    $proto = (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ? 'https' : 'https';
    $appUrl = "{$proto}://{$_SERVER['HTTP_HOST']}";
    putenv("APP_URL={$appUrl}");
    $_ENV['APP_URL'] = $appUrl;
    $_SERVER['APP_URL'] = $appUrl;
}

// Database handling for Vercel
if (getenv('DB_CONNECTION') === 'sqlite' || !getenv('DB_CONNECTION')) {
    $tmpDb = '/tmp/database.sqlite';
    $srcDb = __DIR__ . '/../database/database.sqlite';
    if (!file_exists($tmpDb) && file_exists($srcDb)) {
        @copy($srcDb, $tmpDb);
    } elseif (!file_exists($tmpDb)) {
        @touch($tmpDb);
    }
    @chmod($tmpDb, 0666);
    putenv("DB_CONNECTION=sqlite");
    putenv("DB_DATABASE={$tmpDb}");
    $_ENV['DB_CONNECTION'] = 'sqlite';
    $_ENV['DB_DATABASE'] = $tmpDb;
    $_SERVER['DB_CONNECTION'] = 'sqlite';
    $_SERVER['DB_DATABASE'] = $tmpDb;
}

require __DIR__ . '/../public/index.php';
