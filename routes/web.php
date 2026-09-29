<?php

use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\AduanController;
use App\Http\Controllers\PejabatController;
use App\Http\Controllers\ProfilController;
use App\Models\Desa;
use App\Models\Profil;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

Route::get('/', function () {
    $desa = PublicSite::currentDesa();
    $nama = PublicSite::displayName($desa);

    $profil = $desa instanceof Desa
        ? Profil::withoutGlobalScope('desa')->where('desa_id', $desa->id)->first()
        : null;

    $sejarah = trim(strip_tags(HtmlSanitizer::clean((string) $profil?->sejarah)));

    return Inertia::render('welcome', [
        // Excerpt feed for the Beranda assembly in issue 18.
        'profilExcerpt' => [
            'sejarah' => $sejarah === '' ? null : Str::limit($sejarah, 200),
            'urls' => [
                'sejarah' => route('profil.sejarah'),
                'visiMisi' => route('profil.visi-misi'),
            ],
        ],
        'meta' => [
            'title' => "Portal Resmi {$nama}",
            'description' => "Website resmi {$nama}: profil desa, layanan publik, berita terkini, lokasi kantor desa, dan Aduan warga.",
        ],
        ...PublicSite::sharedProps($desa),
    ]);
})->name('home');

Route::get('profil/sejarah', [ProfilController::class, 'sejarah'])->name('profil.sejarah');
Route::get('profil/visi-misi', [ProfilController::class, 'visiMisi'])->name('profil.visi-misi');

// Issue #15: Struktur Organisasi native (menggantikan mockup segera-hadir).
Route::get('struktur-pemerintahan', [PejabatController::class, 'index'])->name('struktur');

// Issue #19: nav mockup jujur — modul belum-siap menampilkan status
// under-development eksplisit, tidak pernah 404 / link mati / hash.
Route::get('segera-hadir/{modul}', function (string $modul) {
    $desa = PublicSite::currentDesa();
    $nama = PublicSite::displayName($desa);

    return Inertia::render('segera-hadir', [
        'modul' => $modul,
        'meta' => [
            'title' => "Segera Hadir di {$nama}",
            'description' => "Modul {$modul} {$nama} sedang disiapkan dan akan segera hadir di portal resmi.",
        ],
        ...PublicSite::sharedProps($desa),
    ]);
})->whereIn('modul', [
    'pemerintahan',
    'lembaga-desa',
    'layanan-warga',
    'layanan',
    'informasi',
    'berita',
    'pengumuman',
    'potensi-galeri',
    'kontak-lokasi',
])->name('segera-hadir');

// Issue #19: form Aduan sederhana — simpan sederhana, tanpa disposisi.
Route::post('aduan', [AduanController::class, 'store'])->name('aduan.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['web', 'auth', 'verified'])->prefix('admin')->group(function () {
    Route::post('media/upload', [MediaController::class, 'upload'])->name('admin.media.upload');
});

require __DIR__.'/settings.php';
