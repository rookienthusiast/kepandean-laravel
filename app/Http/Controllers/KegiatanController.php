<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\Kegiatan;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class KegiatanController extends Controller
{
    public function index(): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        $query = $desa instanceof Desa
            ? Kegiatan::visibleForDesa($desa)->orderByDesc('published_at')->orderByDesc('id')
            : Kegiatan::query()->whereRaw('1 = 0');

        $paginator = $query->paginate(9)->withQueryString();

        $paginator->getCollection()->transform(fn (Kegiatan $kegiatan): array => $this->toCard($kegiatan));

        return Inertia::render('kegiatan/index', [
            'kegiatan' => $paginator,
            'meta' => [
                'title' => "Kegiatan {$nama}",
                'description' => "Kegiatan resmi {$nama} di portal resmi.",
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    public function show(string $slug): Response
    {
        $desa = PublicSite::currentDesa();

        $kegiatan = $desa instanceof Desa
            ? Kegiatan::visibleForDesa($desa)->where('slug', $slug)->first()
            : null;

        abort_if($kegiatan === null, 404);

        $isi = HtmlSanitizer::clean((string) $kegiatan->isi);
        $nama = PublicSite::displayName($desa);
        $date = $kegiatan->published_at ?? $kegiatan->created_at ?? now();

        return Inertia::render('kegiatan/detail', [
            'kegiatan' => [
                'judul' => $kegiatan->judul,
                'slug' => $kegiatan->slug,
                'isi' => $isi,
                'cover_url' => $kegiatan->cover_path ? asset('storage/'.$kegiatan->cover_path) : null,
                'tanggal' => $date->format('d M Y'),
                'kedaluarsa' => $kegiatan->expired_at?->format('d M Y'),
                'url' => route('kegiatan.show', ['slug' => $kegiatan->slug]),
            ],
            'meta' => [
                'title' => "{$kegiatan->judul} ({$nama})",
                'description' => Str::limit(trim(strip_tags($isi)), 150),
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    /** @return array<string, mixed> */
    private function toCard(Kegiatan $kegiatan): array
    {
        $date = $kegiatan->published_at ?? $kegiatan->created_at ?? now();
        $excerpt = Str::limit(trim(strip_tags(HtmlSanitizer::clean((string) $kegiatan->isi))), 160);

        return [
            'judul' => $kegiatan->judul,
            'slug' => $kegiatan->slug,
            'excerpt' => $excerpt === '' ? null : $excerpt,
            'cover_url' => $kegiatan->cover_path ? asset('storage/'.$kegiatan->cover_path) : null,
            'tanggal' => $date->format('d M Y'),
            'url' => route('kegiatan.show', ['slug' => $kegiatan->slug]),
        ];
    }
}
