<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\Pengumuman;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PengumumanController extends Controller
{
    public function index(): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        $query = $desa instanceof Desa
            ? Pengumuman::visibleForDesa($desa)->orderByDesc('published_at')->orderByDesc('id')
            : Pengumuman::query()->whereRaw('1 = 0');

        $paginator = $query->paginate(9)->withQueryString();

        $paginator->getCollection()->transform(fn (Pengumuman $pengumuman): array => $this->toCard($pengumuman));

        return Inertia::render('pengumuman/index', [
            'pengumuman' => $paginator,
            'meta' => [
                'title' => "Pengumuman {$nama}",
                'description' => "Pengumuman resmi {$nama} di portal resmi.",
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    public function show(string $slug): Response
    {
        $desa = PublicSite::currentDesa();

        $pengumuman = $desa instanceof Desa
            ? Pengumuman::visibleForDesa($desa)->where('slug', $slug)->first()
            : null;

        abort_if($pengumuman === null, 404);

        $isi = HtmlSanitizer::clean((string) $pengumuman->isi);
        $nama = PublicSite::displayName($desa);
        $date = $pengumuman->published_at ?? $pengumuman->created_at ?? now();

        return Inertia::render('pengumuman/detail', [
            'pengumuman' => [
                'judul' => $pengumuman->judul,
                'slug' => $pengumuman->slug,
                'isi' => $isi,
                'cover_url' => $pengumuman->cover_path ? asset('storage/'.$pengumuman->cover_path) : null,
                'tanggal' => $date->format('d M Y'),
                'kedaluarsa' => $pengumuman->expired_at?->format('d M Y'),
                'url' => route('pengumuman.show', ['slug' => $pengumuman->slug]),
            ],
            'meta' => [
                'title' => "{$pengumuman->judul} ({$nama})",
                'description' => Str::limit(trim(strip_tags($isi)), 150),
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }

    /** @return array<string, mixed> */
    private function toCard(Pengumuman $pengumuman): array
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
