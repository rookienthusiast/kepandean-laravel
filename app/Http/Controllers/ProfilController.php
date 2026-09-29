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
    public function sejarah(): Response
    {
        return $this->render(
            'profil/sejarah',
            'Sejarah',
            fn (Desa $desa): string => "Sejarah {$desa->name}: latar dan perjalanan desa di portal resmi."
        );
    }

    public function visiMisi(): Response
    {
        return $this->render(
            'profil/visi-misi',
            'Visi dan Misi',
            fn (Desa $desa): string => "Visi dan misi {$desa->name}: arah pembangunan desa di portal resmi."
        );
    }

    /**
     * @param  callable(Desa): string  $description
     */
    private function render(string $component, string $pageLabel, callable $description): Response
    {
        $desa = PublicSite::currentDesa();

        $profil = $desa instanceof Desa
            ? Profil::withoutGlobalScope('desa')->where('desa_id', $desa->id)->first()
            : null;

        return Inertia::render($component, [
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
                'title' => $desa instanceof Desa ? "{$pageLabel} {$desa->name}" : $pageLabel,
                'description' => $desa instanceof Desa ? $description($desa) : $pageLabel,
            ],
            ...PublicSite::sharedProps($desa),
        ]);
    }
}
