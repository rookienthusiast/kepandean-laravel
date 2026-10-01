<?php

use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\AduanController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\InformasiController;
use App\Http\Controllers\PejabatController;
use App\Http\Controllers\PengumumanController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\SitemapController;
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

// Issue #16: Berita end to end (pola baku untuk Pengumuman #17).
Route::get('berita', [BeritaController::class, 'index'])->name('berita.index');
Route::get('berita/{tahun}/{bulan}/{tanggal}/{slug}', [BeritaController::class, 'show'])
    ->where(['tahun' => '[0-9]{4}', 'bulan' => '[0-9]{2}', 'tanggal' => '[0-9]{2}', 'slug' => '[a-z0-9-]+'])
    ->name('berita.show');

// Issue #17: Pengumuman native (meniru pola Berita #16, versi ringan:
// URL slug-saja, tanpa filter kategori). Menggantikan mockup segera-hadir.
Route::get('pengumuman', [PengumumanController::class, 'index'])->name('pengumuman.index');
Route::get('pengumuman/{slug}', [PengumumanController::class, 'show'])
    ->where('slug', '[a-z0-9-]+')
    ->name('pengumuman.show');

// Alias lama /segera-hadir/pengumuman diteruskan ke rute native (301).
Route::get('segera-hadir/pengumuman', function () {
    return redirect()->route('pengumuman.index', status: 301);
});

// Issue #16: sitemap otomatis memuat URL berita yang baru terbit.
Route::get('sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// Issue gabungan: halaman Informasi agregat Berita + Pengumuman
// (tab/filter/paginasi terpisah, bukan load semua sekaligus).
Route::get('informasi', [InformasiController::class, 'index'])->name('informasi');

// Modul belum-siap memakai slug kanonisnya sendiri (/pemerintahan,
// bukan /segera-hadir/...) dengan status under-development
// eksplisit — tidak pernah 404 / link mati / hash.
// (Pengumuman sudah native via issue #17, Informasi native via agregat.)
foreach ([
    'pemerintahan' => 'Pemerintahan',
    'lembaga-desa' => 'Lembaga Desa',
    'layanan-warga' => 'Layanan Warga',
    'layanan' => 'Layanan',
    'potensi-galeri' => 'Potensi & Galeri',
    'kontak-lokasi' => 'Kontak & Lokasi',
] as $slug => $label) {
    Route::get($slug, function () use ($slug, $label) {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        return Inertia::render('segera-hadir', [
            'modul' => $slug,
            'meta' => [
                'title' => "{$label} {$nama}",
                'description' => "Modul {$label} {$nama} sedang disiapkan dan akan segera hadir di portal resmi.",
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    })->name("segera-hadir.{$slug}");
}

// Alias lama dipertahankan agar tautan lama tidak patah (tetap 200).
// Alias lama /segera-hadir/informasi diteruskan ke rute native (301).
Route::get('segera-hadir/informasi', function () {
    return redirect()->route('informasi', status: 301);
});
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
