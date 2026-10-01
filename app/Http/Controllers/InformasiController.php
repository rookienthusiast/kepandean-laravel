<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\Kategori;
use App\Models\Pengumuman;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class InformasiController extends Controller
{
    public function index(Request $request): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        /** @var string $tab */
        $tab = $request->query('tab', 'berita');
        $tab = in_array($tab, ['berita', 'pengumuman'], true) ? $tab : 'berita';

        $kategoris = $desa instanceof Desa
            ? Kategori::forDesa($desa)->orderBy('nama')->get()
            : collect();

        /** @var string|null $activeSlug */
        $activeSlug = $request->query('kategori');
        $active = is_string($activeSlug) && $activeSlug !== ''
            ? $kategoris->firstWhere('slug', $activeSlug)
            : null;

        $beritaQuery = $desa instanceof Desa
            ? Berita::publishedForDesa($desa)->with('kategori')->orderByDesc('published_at')->orderByDesc('id')
            : Berita::query()->whereRaw('1 = 0');

        if ($active instanceof Kategori) {
            $beritaQuery->where('kategori_id', $active->id);
        }

        // Paginasi terpisah per tab: page param berbeda agar tidak
        // saling menimpa (bukan load semua sekaligus).
        $beritaPaginator = $beritaQuery->paginate(6, ['*'], 'berita_page')->withQueryString();
        $beritaPaginator->getCollection()->transform(fn (Berita $berita): array => $this->toBeritaCard($berita));

        $pengumumanQuery = $desa instanceof Desa
            ? Pengumuman::visibleForDesa($desa)->orderByDesc('published_at')->orderByDesc('id')
            : Pengumuman::query()->whereRaw('1 = 0');

        $pengumumanPaginator = $pengumumanQuery->paginate(6, ['*'], 'pengumuman_page')->withQueryString();
        $pengumumanPaginator->getCollection()->transform(fn (Pengumuman $pengumuman): array => $this->toPengumumanCard($pengumuman));

        // Badge tab memakai total tanpa filter kategori agar konsisten
        // saat filter aktif (paginator di atas sudah terfilter).
        $beritaTotal = $desa instanceof Desa
            ? Berita::publishedForDesa($desa)->count()
            : 0;

        return Inertia::render('informasi/index', [
            'tab' => $tab,
            'berita' => $beritaPaginator,
            'pengumuman' => $pengumumanPaginator,
            'kategoris' => $kategoris->map(fn (Kategori $kategori): array => [
                'nama' => $kategori->nama,
                'slug' => $kategori->slug,
            ])->all(),
            'activeKategori' => $active instanceof Kategori ? $active->slug : null,
            'counts' => [
                'berita' => $beritaTotal,
                'pengumuman' => $pengumumanPaginator->total(),
            ],
            'meta' => [
                'title' => "Informasi {$nama}",
                'description' => "Informasi {$nama}: arsip berita terkini dan pengumuman resmi di portal resmi.",
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    /** @return array<string, mixed> */
    private function toBeritaCard(Berita $berita): array
    {
        $date = $berita->published_at ?? $berita->created_at ?? now();
        $excerpt = Str::limit(trim(strip_tags(HtmlSanitizer::clean((string) $berita->isi))), 160);

        return [
            'judul' => $berita->judul,
            'slug' => $berita->slug,
            'excerpt' => $excerpt === '' ? null : $excerpt,
            'cover_url' => $berita->cover_path ? asset('storage/'.$berita->cover_path) : null,
            'kategori' => $berita->kategori instanceof Kategori ? [
                'nama' => $berita->kategori->nama,
                'slug' => $berita->kategori->slug,
            ] : null,
            'tanggal' => $date->format('d M Y'),
            'url' => route('berita.show', [
                'tahun' => $date->format('Y'),
                'bulan' => $date->format('m'),
                'tanggal' => $date->format('d'),
                'slug' => $berita->slug,
            ]),
        ];
    }

    /** @return array<string, mixed> */
    private function toPengumumanCard(Pengumuman $pengumuman): array
    {
        $date = $pengumuman->published_at ?? $pengumuman->created_at ?? now();
        $excerpt = Str::limit(trim(strip_tags(HtmlSanitizer::clean((string) $pengumuman->isi))), 160);

        return [
            'judul' => $pengumuman->judul,
            'slug' => $pengumuman->slug,
            'excerpt' => $excerpt === '' ? null : $excerpt,
            'cover_url' => $pengumuman->cover_path ? asset('storage/'.$pengumuman->cover_path) : null,
            'tanggal' => $date->format('d M Y'),
            'url' => route('pengumuman.show', ['slug' => $pengumuman->slug]),
        ];
    }
}
