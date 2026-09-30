<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SegeraHadirCanonicalTest extends TestCase
{
    use RefreshDatabase;

    public function test_modul_belum_siap_pakai_slug_kanonis(): void
    {
        // NB issue #17: /pengumuman sudah native, bukan mockup lagi.
        $cases = [
            '/pemerintahan' => 'Pemerintahan',
            '/lembaga-desa' => 'Lembaga Desa',
            '/layanan-warga' => 'Layanan Warga',
            '/layanan' => 'Layanan',
            '/informasi' => 'Informasi',
            '/potensi-galeri' => 'Potensi & Galeri',
            '/kontak-lokasi' => 'Kontak & Lokasi',
        ];

        foreach ($cases as $url => $label) {
            $this->get($url)
                ->assertOk()
                ->assertInertia(function ($page) use ($label) {
                    $page->component('segera-hadir');
                    $page->where('meta.title', "{$label} Desa Kepandean");
                });
        }
    }

    public function test_alias_lama_pengumuman_diteruskan_ke_native(): void
    {
        // NB issue #17: alias lama 301 ke rute native (bukan 200 mockup).
        $this->get('/segera-hadir/pengumuman')->assertStatus(301)->assertRedirect('/pengumuman');
    }

    public function test_nav_memakai_url_kanonis(): void
    {
        $props = $this->get('/')->inertiaProps();

        $hrefs = collect($props['site']['nav'] ?? [])
            ->flatMap(fn (array $item): array => array_merge(
                [$item['href'] ?? ''],
                array_column($item['children'] ?? [], 'href')
            ))
            ->all();

        $this->assertContains('/pengumuman', $hrefs);
        $this->assertNotContains('/segera-hadir/pengumuman', $hrefs);
    }
}
