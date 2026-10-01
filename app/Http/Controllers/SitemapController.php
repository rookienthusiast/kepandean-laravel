<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\Pengumuman;
use App\Support\PublicSite;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index(): HttpResponse
    {
        $desa = PublicSite::currentDesa();

        $urls = [
            $this->entry(route('home'), now()),
            $this->entry(route('profil.sejarah-visi-misi'), now()),
            $this->entry(route('profil.struktur'), now()),
            $this->entry(route('berita.index'), now()),
            $this->entry(route('pengumuman.index'), now()),
            $this->entry(route('informasi'), now()),
        ];

        if ($desa instanceof Desa) {
            $beritas = Berita::publishedForDesa($desa)->orderByDesc('published_at')->get();

            foreach ($beritas as $berita) {
                $date = $berita->published_at ?? $berita->created_at ?? now();

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
            $pengumumans = Pengumuman::visibleForDesa($desa)->orderByDesc('published_at')->get();

            foreach ($pengumumans as $pengumuman) {
                $urls[] = $this->entry(
                    route('pengumuman.show', ['slug' => $pengumuman->slug]),
                    $pengumuman->updated_at ?? now(),
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
