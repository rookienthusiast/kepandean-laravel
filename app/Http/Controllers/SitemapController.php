<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\Kegiatan;
use App\Models\Pengumuman;
use App\Support\PublicSite;
use App\Support\Terbitan;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index(): HttpResponse
    {
        $desa = PublicSite::currentDesa();

        // Entri statis diturunkan dari nav: laman native baru otomatis
        // masuk sitemap tanpa edit kedua.
        $urls = array_map(
            fn (string $path): array => $this->entry(url($path), now()),
            PublicSite::sitemapPaths(),
        );

        if ($desa instanceof Desa) {
            $beritas = Terbitan::archiveFor($desa, Berita::class, 'publishedForDesa')->get();

            foreach ($beritas as $berita) {
                $date = Terbitan::displayDate($berita);

                $urls[] = $this->entry(
                    route('berita.show', [
                        'tahun' => $date->format('Y'),
                        'bulan' => $date->format('m'),
                        'tanggal' => $date->format('d'),
                        'slug' => $berita->slug,
                    ]),
                    $berita->updated_at ?? now(),
                );
            }

            // Issue #17: sitemap memuat pengumuman yang tayang saja
            // (published + belum kedaluarsa).
            $pengumumans = Terbitan::archiveFor($desa, Pengumuman::class, 'visibleForDesa')->get();

            foreach ($pengumumans as $pengumuman) {
                $urls[] = $this->entry(
                    route('pengumuman.show', ['slug' => $pengumuman->slug]),
                    $pengumuman->updated_at ?? now(),
                );
            }

            $kegiatans = Terbitan::archiveFor($desa, Kegiatan::class, 'visibleForDesa')->get();

            foreach ($kegiatans as $kegiatan) {
                $urls[] = $this->entry(
                    route('kegiatan.show', ['slug' => $kegiatan->slug]),
                    $kegiatan->updated_at ?? now(),
                );
            }
        }

        $xml = view('sitemap', ['urls' => $urls])->render();

        return Response::make($xml, 200, ['Content-Type' => 'text/xml; charset=UTF-8']);
    }

    /**
     * @return array{loc: string, lastmod: string}
     */
    private function entry(string $loc, \DateTimeInterface $lastmod): array
    {
        return ['loc' => $loc, 'lastmod' => $lastmod->format('Y-m-d')];
    }
}
