<?php

namespace Database\Seeders;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\HeroSlide;
use App\Models\Kategori;
use App\Models\Kegiatan;
use App\Models\LamanHero;
use App\Models\Pejabat;
use App\Models\Pengumuman;
use App\Models\Profil;
use App\Models\Statistik;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ContentFigmaSeeder extends Seeder
{
    public function run(): void
    {
        $desa = Desa::where('slug', 'kepandean')->first();

        if (! $desa instanceof Desa) {
            $desa = Desa::create([
                'name' => 'Desa Kepandean',
                'slug' => 'kepandean',
            ]);
        }

        // 1. Profil (Sejarah, Visi, Misi & Foto Latar dari Figma)
        Profil::withoutGlobalScope('desa')->updateOrCreate(
            ['desa_id' => $desa->id],
            [
                'sejarah' => 'Desa Kepandean yang terletak di Kabupaten Tegal digambarkan sebagai wilayah yang memadukan keharmonisan sosial dengan potensi ekonomi lokal yang beragam. Komunitas ini mengandalkan sektor pertanian, peternakan, dan kewirausahaan, khususnya dalam produksi kudapan latopia serta kerajinan alat rumah tangga dari sabut kelapa. Kehidupan warga didukung oleh fasilitas publik yang memadai, mulai dari sarana kesehatan hingga institusi pendidikan yang lengkap. Kerjasama antarwarga terlihat jelas melalui pembentukan paguyuban usaha dan kegiatan gotong royong yang memperkuat ikatan persaudaraan. Selain ekonomi, desa ini menjaga kelestarian identitasnya melalui tradisi religius dan budaya yang diwariskan secara turun-temurun oleh para leluhur. Secara keseluruhan, sumber ini menyoroti semangat kolektif masyarakat dalam memajukan kesejahteraan desa demi masa depan yang lebih cerah.',
                'visi' => 'Terbangunnya tata kelola pemerintahan desa yang baik dan bersih guna mewujudkan desa Kepandean Religius, Berbudaya, Adil, Mandiri, Makmur, Berdikari, Sejahtera dan Bermanfaat',
                'misi' => "1. Menyelenggarakan pemerintahan desa yang transparan, akuntabel, dan melayani masyarakat secara prima.\n2. Mengembangkan perekonomian masyarakat berbasis potensi lokal pertanian, UMKM kudapan latopia, dan kerajinan sabut kelapa.\n3. Mewujudkan tata kelola lingkungan yang bersih, sehat, dan infrastruktur desa yang memadai.\n4. Memperkuat nilai-nilai keagamaan, gotong royong, dan pelestarian budaya lokal warisan leluhur.",
                'foto_path' => 'profil/sejarah-desa.jpg',
            ]
        );

        // 2. Hero Slide (Beranda)
        HeroSlide::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        HeroSlide::create([
            'desa_id' => $desa->id,
            'judul' => 'Selamat Datang di Desa Kepandean',
            'subjudul' => 'Kecamatan Dukuhturi, Kabupaten Tegal',
            'tautan_label' => 'Jelajahi Desa',
            'tautan_url' => '#layanan',
            'gambar_path' => 'hero/hero-sawah.jpg',
            'urutan' => 1,
            'aktif' => true,
        ]);

        // 3. Statistik Penduduk (Sesuai Figma: Total 4.820 Jiwa)
        $statistikData = [
            'total_jiwa' => '4820',
            'laki_laki' => '2450',
            'perempuan' => '2370',
            'kepala_keluarga' => '1348',
        ];
        foreach ($statistikData as $kunci => $nilai) {
            Statistik::withoutGlobalScope('desa')->updateOrCreate(
                ['desa_id' => $desa->id, 'kunci' => $kunci],
                ['nilai' => $nilai]
            );
        }

        // 4. Kategori Berita
        $katPembangunan = Kategori::withoutGlobalScope('desa')->firstOrCreate(
            ['desa_id' => $desa->id, 'slug' => 'pembangunan-apbdes'],
            ['nama' => 'Pembangunan & APBDes']
        );
        $katPemerintahan = Kategori::withoutGlobalScope('desa')->firstOrCreate(
            ['desa_id' => $desa->id, 'slug' => 'pemerintahan-desa'],
            ['nama' => 'Pemerintahan Desa']
        );
        $katWarga = Kategori::withoutGlobalScope('desa')->firstOrCreate(
            ['desa_id' => $desa->id, 'slug' => 'kabar-warga'],
            ['nama' => 'Kabar Warga']
        );

        // 5. Berita Desa
        Berita::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        Berita::create([
            'desa_id' => $desa->id,
            'kategori_id' => $katPembangunan->id,
            'judul' => 'Musyawarah Desa Penetapan APBDES Tahun Anggaran 2025',
            'slug' => 'musyawarah-desa-penetapan-apbdes-tahun-anggaran-2025',
            'isi' => '<p>Pemerintah Desa Kepandean menyelenggarakan Musyawarah Desa (Musdes) penetapan Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2025 bersama Badan Permusyawaratan Desa (BPD), jajaran perangkat desa, tokoh masyarakat, serta perwakilan pemuda dan perempuan.</p><p>Musyawarah ini menetapkan fokus alokasi anggaran pada pembangunan sarana jalan desa, peningkatan drainase permukiman, penguatan program ketahanan pangan, serta bantuan pemberdayaan pelaku UMKM lokal penghasil kudapan latopia dan kerajinan sabut kelapa.</p>',
            'cover_path' => 'berita/musyawarah-apbdes.jpg',
            'status' => Berita::STATUS_PUBLISHED,
            'published_at' => Carbon::create(2025, 3, 25, 9, 0, 0),
        ]);

        Berita::create([
            'desa_id' => $desa->id,
            'kategori_id' => $katPemerintahan->id,
            'judul' => 'Sosialisasi Optimalisasi Layanan Surat Online Mandiri untuk Warga',
            'slug' => 'sosialisasi-optimalisasi-layanan-surat-online-mandiri',
            'isi' => '<p>Guna mempermudah kebutuhan administrasi warga, Balai Desa Kepandean meluncurkan sistem surat online mandiri. Warga kini dapat mengajukan permohonan surat pengantar dan keterangan secara mudah dari ponsel pintar masing-masing.</p>',
            'cover_path' => 'hero/hero-sawah.jpg',
            'status' => Berita::STATUS_PUBLISHED,
            'published_at' => Carbon::create(2025, 3, 20, 10, 30, 0),
        ]);

        Berita::create([
            'desa_id' => $desa->id,
            'kategori_id' => $katWarga->id,
            'judul' => 'Pengembangan Sentra Kuliner Latopia dan Kerajinan Sabut Kelapa',
            'slug' => 'pengembangan-sentra-kuliner-latopia-dan-kerajinan-sabut-kelapa',
            'isi' => '<p>Paguyuban perajin dan pelaku usaha desa Kepandean mengadakan pameran mini serta pelatihan kemasan ramah lingkungan untuk memperkenalkan kudapan khas latopia ke pasar regional Jawa Tengah.</p>',
            'cover_path' => 'profil/sejarah-desa.jpg',
            'status' => Berita::STATUS_PUBLISHED,
            'published_at' => Carbon::create(2025, 3, 14, 13, 0, 0),
        ]);

        // 6. Pengumuman
        Pengumuman::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        Pengumuman::create([
            'desa_id' => $desa->id,
            'judul' => 'Jam Layanan Tatap Muka Kantor Balai Desa Kepandean',
            'slug' => 'jam-layanan-tatap-muka-kantor-balai-desa-kepandean',
            'isi' => '<p>Pelayanan administrasi warga di Balai Desa Kepandean buka setiap hari kerja:<br><strong>Senin - Kamis:</strong> 08.00 - 15.00 WIB<br><strong>Jumat:</strong> 08.00 - 11.30 WIB<br><strong>Sabtu - Minggu:</strong> Libur Operasional.</p>',
            'cover_path' => 'profil/sejarah-desa.jpg',
            'status' => Pengumuman::STATUS_PUBLISHED,
            'published_at' => Carbon::now()->subDays(5),
            'expired_at' => Carbon::now()->addYear(),
        ]);

        Pengumuman::create([
            'desa_id' => $desa->id,
            'judul' => 'Hotline Aduan Cepat Permasalahan Jalan dan Fasilitas Umum',
            'slug' => 'hotline-aduan-cepat-permasalahan-jalan-dan-fasilitas-umum',
            'isi' => '<p>Warga yang menemukan kerusakan lampu penerangan jalan atau jalan desa dapat menyampaikan laporan disertai foto lokasi melalui layanan WhatsApp Hotline Balai Desa Kepandean.</p>',
            'cover_path' => null,
            'status' => Pengumuman::STATUS_PUBLISHED,
            'published_at' => Carbon::now()->subDays(2),
            'expired_at' => Carbon::now()->addYear(),
        ]);

        // 7. Kegiatan Desa
        Kegiatan::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        Kegiatan::create([
            'desa_id' => $desa->id,
            'judul' => 'Gotong Royong Bersih Saluran Air dan Lingkungan Permukiman',
            'slug' => 'gotong-royong-bersih-saluran-air-lingkungan-permukiman',
            'isi' => '<p>Kerja bakti massal bersama seluruh warga, pengurus RT/RW, dan perangkat desa untuk mengantisipasi genangan air serta menjaga kebersihan lingkungan desa.</p>',
            'cover_path' => 'hero/hero-sawah.jpg',
            'status' => Kegiatan::STATUS_PUBLISHED,
            'published_at' => Carbon::now()->subDays(3),
            'expired_at' => Carbon::now()->addMonths(6),
        ]);

        Kegiatan::create([
            'desa_id' => $desa->id,
            'judul' => 'Pemeriksaan Kesehatan Posyandu Balita & Posbindu Lansia',
            'slug' => 'pemeriksaan-kesehatan-posyandu-balita-dan-posbindu-lansia',
            'isi' => '<p>Kegiatan rutin bulanan penimbangan balita, imunisasi, dan pemeriksaan tensi darah gratis bagi para lansia di Balai Desa Kepandean.</p>',
            'cover_path' => 'profil/sejarah-desa.jpg',
            'status' => Kegiatan::STATUS_PUBLISHED,
            'published_at' => Carbon::now()->subDays(7),
            'expired_at' => Carbon::now()->addMonths(6),
        ]);

        // 8. Struktur Organisasi / Pejabat (Sesuai Bagan Figma)
        Pejabat::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        $pejabats = [
            // Pimpinan
            ['nama' => 'Wastedjo, S.Pd', 'jabatan' => 'Kepala Desa', 'kelompok' => Pejabat::KELOMPOK_PIMPINAN, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 1],

            // Perangkat Desa
            ['nama' => 'Heri A. Tiar', 'jabatan' => 'Sekretaris Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 2],
            ['nama' => 'Nurcholis', 'jabatan' => 'Bendahara Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 3],
            ['nama' => 'Istiqomah. N', 'jabatan' => 'Kaur TU & Umum', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 4],
            ['nama' => 'Yahya Firmansyah', 'jabatan' => 'Kaur Perencanaan Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 5],
            ['nama' => 'Wahyudin', 'jabatan' => 'Kasi Kesejahteraan Masyarakat', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => 'pejabat/kasi-kesejahteraan.jpg', 'urutan' => 6],
            ['nama' => 'Darweni', 'jabatan' => 'Kasi Pemerintahan Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => 'pejabat/kasi-pemerintahan.jpg', 'urutan' => 7],
            ['nama' => 'Sihkartono', 'jabatan' => 'Kasi Pelayanan Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 8],
            ['nama' => 'Tasdik', 'jabatan' => 'Staf Desa 1', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 9],
            ['nama' => 'Erwin Wilianto', 'jabatan' => 'Staf Desa 2', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'wilayah_label' => null, 'foto_path' => null, 'urutan' => 10],

            // Wilayah Desa (Kadus, RW, RT)
            ['nama' => 'Supra Yogi', 'jabatan' => 'Ketua RW 02', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 02', 'foto_path' => 'pejabat/kadus-1.jpg', 'urutan' => 11],
            ['nama' => 'Wardi Adi', 'jabatan' => 'Ketua RT 01', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 01 / RW 02', 'foto_path' => null, 'urutan' => 12],
            ['nama' => 'Nurokhim', 'jabatan' => 'Ketua RT 02', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 02 / RW 02', 'foto_path' => null, 'urutan' => 13],
            ['nama' => 'Sumo', 'jabatan' => 'Ketua RT 03', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 03 / RW 02', 'foto_path' => null, 'urutan' => 14],
            ['nama' => 'Sutrisno', 'jabatan' => 'Ketua RT 04', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 04 / RW 02', 'foto_path' => null, 'urutan' => 15],
            ['nama' => 'Sutikno', 'jabatan' => 'Ketua RT 05', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 05 / RW 02', 'foto_path' => null, 'urutan' => 16],

            ['nama' => 'Sony A', 'jabatan' => 'Ketua RT 02', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 02 / RW 03', 'foto_path' => null, 'urutan' => 17],

            ['nama' => 'Daryono', 'jabatan' => 'Ketua RW 05', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 05', 'foto_path' => 'pejabat/kadus-2.jpg', 'urutan' => 18],
            ['nama' => 'Nurarivin', 'jabatan' => 'Ketua RT 01', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 01 / RW 05', 'foto_path' => null, 'urutan' => 19],
            ['nama' => 'Kasirin', 'jabatan' => 'Ketua RT 05', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 05 / RW 05', 'foto_path' => null, 'urutan' => 20],

            ['nama' => 'Ratmo', 'jabatan' => 'Ketua RW 06', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 06', 'foto_path' => 'pejabat/kadus-3.jpg', 'urutan' => 21],
            ['nama' => 'Taryani', 'jabatan' => 'Ketua RT 01', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 01 / RW 06', 'foto_path' => null, 'urutan' => 22],
            ['nama' => 'Abid', 'jabatan' => 'Ketua RT 04', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 04 / RW 06', 'foto_path' => null, 'urutan' => 23],

            ['nama' => 'M. Rali & Karyono', 'jabatan' => 'Ketua RW 07', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 07', 'foto_path' => null, 'urutan' => 24],
            ['nama' => 'Darto', 'jabatan' => 'Ketua RT 01', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 01 / RW 07', 'foto_path' => null, 'urutan' => 25],
            ['nama' => 'Chaerudin', 'jabatan' => 'Ketua RT 02', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RT 02 / RW 07', 'foto_path' => null, 'urutan' => 26],
        ];

        foreach ($pejabats as $p) {
            Pejabat::create($p + ['desa_id' => $desa->id]);
        }

        // 9. Laman Hero (Banner Halaman Dalam)
        LamanHero::withoutGlobalScope('desa')->where('desa_id', $desa->id)->delete();
        foreach (array_keys(LamanHero::SLUGS) as $slug) {
            LamanHero::create([
                'desa_id' => $desa->id,
                'slug' => $slug,
                'gambar_path' => 'profil/sejarah-desa.jpg',
            ]);
        }
    }
}
