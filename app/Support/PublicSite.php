<?php

namespace App\Support;

use App\Models\Desa;
use App\Models\Statistik;
use Illuminate\Support\Facades\App;

/**
 * Satu-satunya tempat resolusi desa + props publik bersama (issue #18/#19).
 *
 * Menggantikan duplikasi `App::bound('current_desa') ... Desa::getDefault()`
 * yang tersebar di routes + controller. Data kunci mengikuti docs/DESIGN.md
 * (spec-002 menang atas placeholder desain).
 */
class PublicSite
{
    public static function currentDesa(): ?Desa
    {
        $desa = App::bound('current_desa') ? App::make('current_desa') : Desa::getDefault();

        return $desa instanceof Desa ? $desa : null;
    }

    public static function displayName(?Desa $desa): string
    {
        return $desa instanceof Desa ? $desa->name : 'Desa Kepandean';
    }

    /**
     * Item nav mockup: selalu route nyata ke slug kanonis modul
     * (/pengumuman, bukan /segera-hadir/pengumuman), tidak pernah
     * href="#", IP intranet, atau placeholder. Label mengikuti Homepage.png.
     *
     * @return array<int, array{label: string, href: string, children?: array<int, array{label: string, href: string}>}>
     */
    public static function nav(): array
    {
        $soon = fn (string $modul): string => route("segera-hadir.{$modul}", [], false);

        return [
            ['label' => 'Beranda', 'href' => route('home', [], false)],
            [
                'label' => 'Profil Desa',
                'href' => route('profil.sejarah-visi-misi', [], false),
                'children' => [
                    ['label' => 'Sejarah & Visi Misi', 'href' => route('profil.sejarah-visi-misi', [], false)],
                    ['label' => 'Struktur Organisasi', 'href' => route('profil.struktur', [], false)],
                ],
            ],
            [
                'label' => 'Pemerintahan',
                'href' => $soon('lembaga-desa'),
                'children' => [
                    ['label' => 'Lembaga Desa', 'href' => $soon('lembaga-desa')],
                    ['label' => 'Produk Hukum', 'href' => $soon('produk-hukum')],
                    ['label' => 'Laporan', 'href' => $soon('laporan')],
                ],
            ],
            ['label' => 'Layanan Warga', 'href' => $soon('layanan-warga')],
            [
                'label' => 'Informasi',
                'href' => route('informasi', [], false),
                'children' => [
                    ['label' => 'Berita Desa', 'href' => route('berita.index', [], false)],
                    ['label' => 'Pengumuman', 'href' => route('pengumuman.index', [], false)],
                ],
            ],
            ['label' => 'Potensi & Galeri', 'href' => $soon('potensi-galeri')],
            ['label' => 'Kontak & Lokasi', 'href' => $soon('kontak-lokasi')],
        ];
    }

    /**
     * Lokasi kanonis spec-002. Tanpa `luas`: UNCONFIRMED, jangan tampil.
     * Surel + alamat mengikuti design/Homepage.png dan BUTUH konfirmasi
     * perangkat desa (lihat docs/DESIGN.md) — bukan hasil karangan.
     *
     * peta_url adalah tautan tombol "Buka Peta Digital" (blank ke tab
     * baru); peta_embed memakai export/embed.html OSM agar peta inline
     * selalu ter-render tanpa JS Leaflet di sisi klien.
     *
     * Satu-satunya tempat ganti lokasi peta: ubah koordinat + peta_url
     * di bawah — frontend Inertia (welcome.tsx) hanya membaca props
     * `lokasi`, tidak ada URL peta yang di-hardcode di sana.
     *
     * @return array{kode_pos: string, koordinat: string, alamat: string, peta_url: string, peta_embed: string, surel: string}
     */
    public static function lokasi(): array
    {
        return [
            'kode_pos' => '52192',
            'koordinat' => '-6.902522, 109.114750',
            'alamat' => 'Kec. Dukuhturi, Kab. Tegal, Jawa Tengah',
            'peta_url' => 'https://maps.app.goo.gl/S6XXrMWLvmspNv5N9',
            'peta_embed' => 'https://www.openstreetmap.org/export/embed.html?bbox=109.094750%2C-6.912522%2C109.134750%2C-6.892522&layer=mapnik&marker=-6.902522%2C109.114750',
            'surel' => 'pemdes@kepandean.desa.id',
        ];
    }

    /**
     * Kontak footer: telepon butuh konfirmasi perangkat desa — teks jujur,
     * bukan `xxx` (aturan: tidak ada data yang dikarang). Jam pelayanan +
     * sosmed mengikuti design/Homepage.png dan ikut BUTUH konfirmasi
     * (lihat docs/DESIGN.md).
     *
     * @return array{telepon: string, telepon_status: string, surel: string, jam: array<int, array{hari: string, jam: string}>, sosmed: array<int, array{label: string, href: string}>}
     */
    public static function kontak(): array
    {
        return [
            'telepon' => 'Nomor telepon dalam konfirmasi perangkat desa',
            'telepon_status' => 'unconfirmed',
            'surel' => 'pemdes@kepandean.desa.id',
            'jam' => [
                ['hari' => 'Senin - Kamis', 'jam' => '08.00 - 15.00 WIB'],
                ['hari' => 'Jumat', 'jam' => '08.00 - 11.30 WIB'],
                ['hari' => 'Sabtu - Minggu', 'jam' => 'Libur Operasional'],
            ],
            'sosmed' => [
                ['label' => 'Facebook Balai Desa Kepandean', 'href' => 'https://www.facebook.com/'],
            ],
        ];
    }

    /** @return array<string, mixed> */
    public static function sharedProps(?Desa $desa = null): array
    {
        $desa ??= static::currentDesa();
        $nama = $desa instanceof Desa ? $desa->name : 'Desa Kepandean';

        return [
            'desa' => $desa instanceof Desa ? [
                'name' => $desa->name,
                'slug' => $desa->slug,
            ] : null,
            'site' => [
                'nama' => $nama,
                'nav' => static::nav(),
                'kontak' => static::kontak(),
            ],
            'lokasi' => static::lokasi(),
            'statistik' => Statistik::currentMap(),
        ];
    }
}
