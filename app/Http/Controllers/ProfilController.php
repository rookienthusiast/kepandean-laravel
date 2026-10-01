<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\Profil;
use App\Support\HtmlSanitizer;
use App\Support\PublicSite;
use Inertia\Inertia;
use Inertia\Response;

class ProfilController extends Controller
{
    /**
     * Satu halaman gabungan Sejarah + Visi Misi
     * (lihat design "Sejarah & Visi misi.png").
     */
    public function sejarahVisiMisi(): Response
    {
        $desa = PublicSite::currentDesa();

        $profil = $desa instanceof Desa
            ? Profil::withoutGlobalScope('desa')->where('desa_id', $desa->id)->first()
            : null;

        return Inertia::render('profil/sejarah-visi-misi', [
            'profil' => [
                'sejarah' => HtmlSanitizer::clean($profil?->sejarah),
                'visi' => HtmlSanitizer::clean($profil?->visi),
                'misi' => HtmlSanitizer::clean($profil?->misi),
                'isEmpty' => $profil === null || $profil->isEmpty(),
            ],
            'desa' => $desa instanceof Desa ? [
                'name' => $desa->name,
                'slug' => $desa->slug,
            ] : null,
            'meta' => [
                'title' => $desa instanceof Desa ? "Sejarah & Visi Misi {$desa->name}" : 'Sejarah & Visi Misi',
                'description' => $desa instanceof Desa
                    ? "Sejarah {$desa->name} serta visi dan misi: arah pembangunan desa di portal resmi."
                    : 'Sejarah desa serta visi dan misi di portal resmi.',
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }
}
