<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use App\Support\PublicSite;
use App\Support\Terbitan;
use Inertia\Inertia;
use Inertia\Response;

class KegiatanController extends Controller
{
    public function index(): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        $paginator = Terbitan::archiveFor($desa, Kegiatan::class, 'visibleForDesa')
            ->paginate(9)
            ->withQueryString();

        $paginator->getCollection()->transform(fn (Kegiatan $kegiatan): array => Terbitan::card(
            $kegiatan,
            route('kegiatan.show', ['slug' => $kegiatan->slug]),
        ));

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

        $kegiatan = Terbitan::findFor($desa, Kegiatan::class, 'visibleForDesa', $slug);

        abort_if($kegiatan === null, 404);

        $isi = Terbitan::cleanedIsi($kegiatan);
        $nama = PublicSite::displayName($desa);

        return Inertia::render('kegiatan/detail', [
            'kegiatan' => Terbitan::detail(
                $kegiatan,
                route('kegiatan.show', ['slug' => $kegiatan->slug]),
                $isi,
                ['kedaluarsa' => $kegiatan->expired_at?->format('d M Y')],
            ),
            'meta' => [
                'title' => "{$kegiatan->judul} ({$nama})",
                'description' => Terbitan::metaDescription($isi),
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }
}
