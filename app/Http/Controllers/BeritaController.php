<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\Kategori;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BeritaController extends Controller
{
    public function index(Request $request): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        $kategoris = $desa instanceof Desa
            ? Kategori::forDesa($desa)->orderBy('nama')->get()
            : collect();

        /** @var string|null $activeSlug */
        $activeSlug = $request->query('kategori');
        $active = is_string($activeSlug) && $activeSlug !== ''
            ? $kategoris->firstWhere('slug', $activeSlug)
            : null;

        $query = $desa instanceof Desa
            ? Berita::publishedForDesa($desa)->with('kategori')->orderByDesc('published_at')->orderByDesc('id')
            : Berita::query()->whereRaw('1 = 0');

        if ($active instanceof Kategori) {
            $query->where('kategori_id', $active->id);
        }

        $paginator = $query->paginate(9)->withQueryString();

        $paginator->getCollection()->transform(fn (Berita $berita): array => $this->toCard($berita));

        $title = $active instanceof Kategori ? "Berita {$active->nama} {$nama}" : "Berita {$nama}";

        return Inertia::render('berita/index', [
            'berita' => $paginator,
            'kategoris' => $kategoris->map(fn (Kategori $kategori): array => [
                'nama' => $kategori->nama,
                'slug' => $kategori->slug,
            ])->all(),
            'activeKategori' => $active instanceof Kategori ? $active->slug : null,
            'meta' => [
                'title' => $title,
                'description' => $active instanceof Kategori
                    ? "Arsip berita {$active->nama} {$nama} di portal resmi."
                    : "Arsip berita terkini {$nama} di portal resmi.",
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    /**
     * @param  numeric-string  $tahun
     * @param  numeric-string  $bulan
     * @param  numeric-string  $tanggal
     */
    public function show(string $tahun, string $bulan, string $tanggal, string $slug): Response
    {
        $desa = PublicSite::currentDesa();

        $berita = $desa instanceof Desa
            ? Berita::publishedForDesa($desa)->with('kategori')->where('slug', $slug)->first()
            : null;

        abort_if($berita === null, 404);

        $date = $berita->published_at ?? $berita->created_at ?? now();

        abort_unless(
            (int) $tahun === (int) $date->format('Y')
                && (int) $bulan === (int) $date->format('m')
                && (int) $tanggal === (int) $date->format('d'),
            404
        );

        $isi = HtmlSanitizer::clean((string) $berita->isi);
        $nama = PublicSite::displayName($desa);

        return Inertia::render('berita/detail', [
            'berita' => [
                'judul' => $berita->judul,
                'slug' => $berita->slug,
                'isi' => $isi,
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
            ],
            'meta' => [
                'title' => "{$berita->judul} ({$nama})",
                'description' => Str::limit(trim(strip_tags($isi)), 150),
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    /** @return array<string, mixed> */
    private function toCard(Berita $berita): array
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
}
