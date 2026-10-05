<?php

// Forward Vercel requests to normal Laravel public/index.php
// Setup temporary writable storage directories in /tmp for Vercel Serverless
$storagePath = '/tmp/storage';

$dirs = [
    $storagePath . '/framework/views',
    $storagePath . '/framework/cache/data',
    $storagePath . '/framework/sessions',
    $storagePath . '/logs',
    $storagePath . '/app/public',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

putenv("LARAVEL_STORAGE_PATH={$storagePath}");
$_ENV['LARAVEL_STORAGE_PATH'] = $storagePath;
$_SERVER['LARAVEL_STORAGE_PATH'] = $storagePath;

// Auto-detect APP_URL for Vercel preview domains if not set
if (!getenv('APP_URL') && isset($_SERVER['HTTP_HOST'])) {
    $proto = (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ? 'https' : 'https';
    $appUrl = "{$proto}://{$_SERVER['HTTP_HOST']}";
    putenv("APP_URL={$appUrl}");
    $_ENV['APP_URL'] = $appUrl;
    $_SERVER['APP_URL'] = $appUrl;
}

// Database handling for Vercel:
// 1. If DATABASE_URL or DB_CONNECTION is set to external DB (e.g. Neon PostgreSQL), Laravel uses it.
// 2. If SQLite is used (default preview), copy local database to /tmp if it doesn't exist yet.
if (getenv('DB_CONNECTION') === 'sqlite' || !getenv('DB_CONNECTION')) {
    $tmpDb = '/tmp/database.sqlite';
    $srcDb = __DIR__ . '/../database/database.sqlite';
    if (!file_exists($tmpDb)) {
        if (file_exists($srcDb)) {
            @copy($srcDb, $tmpDb);
        } else {
            @touch($tmpDb);
        }
    }
    putenv("DB_DATABASE={$tmpDb}");
    $_ENV['DB_DATABASE'] = $tmpDb;
    $_SERVER['DB_DATABASE'] = $tmpDb;
}

require __DIR__ . '/../public/index.php';
