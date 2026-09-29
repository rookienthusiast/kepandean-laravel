<?php

use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\ProfilController;
use App\Models\Desa;
use App\Models\Profil;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

Route::get('/', function () {
    $desa = App::bound('current_desa') ? App::make('current_desa') : Desa::getDefault();

    $profil = $desa instanceof Desa
        ? Profil::withoutGlobalScope('desa')->where('desa_id', $desa->id)->first()
        : null;

    $sejarah = trim(strip_tags((string) $profil?->sejarah));

    return Inertia::render('welcome', [
        // Excerpt feed for the Beranda assembly in issue 18.
        'profilExcerpt' => [
            'sejarah' => $sejarah === '' ? null : Str::limit($sejarah, 200),
            'urls' => [
                'sejarah' => route('profil.sejarah'),
                'visiMisi' => route('profil.visi-misi'),
            ],
        ],
    ]);
})->name('home');

Route::get('profil/sejarah', [ProfilController::class, 'sejarah'])->name('profil.sejarah');
Route::get('profil/visi-misi', [ProfilController::class, 'visiMisi'])->name('profil.visi-misi');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['web', 'auth', 'verified'])->prefix('admin')->group(function () {
    Route::post('media/upload', [MediaController::class, 'upload'])->name('admin.media.upload');
});

require __DIR__.'/settings.php';
