<?php

use App\Http\Controllers\Admin\MediaController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['web', 'auth', 'verified'])->prefix('admin')->group(function () {
    Route::post('media/upload', [MediaController::class, 'upload'])->name('admin.media.upload');
});

require __DIR__.'/settings.php';
