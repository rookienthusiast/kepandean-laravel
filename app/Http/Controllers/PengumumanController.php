<?php

namespace App\Http\Controllers;

use App\Models\Pengumuman;
use App\Support\PublicSite;
use App\Support\Terbitan;
use Inertia\Inertia;
use Inertia\Response;

class PengumumanController extends Controller
{
    public function index(): Response
    {
        $desa = PublicSite::currentDesa();
        $nama = PublicSite::displayName($desa);

        $paginator = Terbitan::archiveFor($desa, Pengumuman::class, 'visibleForDesa')
            ->paginate(9)
            ->withQueryString();

        $paginator->getCollection()->transform(fn (Pengumuman $pengumuman): array => Terbitan::card(
            $pengumuman,
            route('pengumuman.show', ['slug' => $pengumuman->slug]),
        ));

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

        $pengumuman = Terbitan::findFor($desa, Pengumuman::class, 'visibleForDesa', $slug);

        abort_if($pengumuman === null, 404);

        $isi = Terbitan::cleanedIsi($pengumuman);
        $nama = PublicSite::displayName($desa);

        return Inertia::render('pengumuman/detail', [
            'pengumuman' => Terbitan::detail(
                $pengumuman,
                route('pengumuman.show', ['slug' => $pengumuman->slug]),
                $isi,
                ['kedaluarsa' => $pengumuman->expired_at?->format('d M Y')],
            ),
            'meta' => [
                'title' => "{$pengumuman->judul} ({$nama})",
                'description' => Terbitan::metaDescription($isi),
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }
}
