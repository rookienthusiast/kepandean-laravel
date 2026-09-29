<?php

namespace Tests\Feature\Beranda;

use App\Models\Desa;
use App\Models\Profil;
use App\Models\Statistik;
use Database\Seeders\DesaSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Issue #18 slice: Beranda assembly + Statistik + Lokasi + Footer.
 *
 * Seam: HTTP Feature only (spec-002 Testing Decisions).
 */
class BerandaAssemblyTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DesaSeeder::class);
    }

    public function test_home_renders_welcome_with_locked_props(): void
    {
        $desa = Desa::where('slug', 'kepandean')->firstOrFail();
        Profil::forDesa($desa)->update(['sejarah' => '<p>Cuplikan.</p>']);
        Statistik::seedDefaults($desa);

        $this->get('/')
            ->assertOk()
            ->assertInertia(function ($page) {
                $page->component('welcome');
                $page->has('profilExcerpt');
                $page->has('statistik');
                $page->has('lokasi');
                $page->has('site');
                $page->has('meta.title');
                $page->has('meta.description');
            });
    }

    public function test_home_meta_is_unique_per_spec(): void
    {
        $response = $this->get('/');

        $response->assertOk();

        $props = $response->inertiaProps();
        $title = (string) ($props['meta']['title'] ?? '');
        $desc = (string) ($props['meta']['description'] ?? '');

        $this->assertStringContainsString('Kepandean', $title);
        $this->assertNotSame('', trim($desc));
    }

    public function test_statistik_update_reflects_on_home_without_developer(): void
    {
        $desa = Desa::where('slug', 'kepandean')->firstOrFail();
        Statistik::seedDefaults($desa);

        Statistik::forDesa($desa)->where('kunci', 'total_jiwa')->update(['nilai' => '7001']);

        $props = $this->get('/')->inertiaProps();

        $this->assertSame('7001', (string) ($props['statistik']['total_jiwa'] ?? ''));
    }

    public function test_lokasi_uses_canonical_spec_values(): void
    {
        $props = $this->get('/')->inertiaProps();
        $lokasi = $props['lokasi'] ?? [];

        $this->assertSame('52192', (string) ($lokasi['kode_pos'] ?? ''));
        $this->assertStringContainsString('-6.913977', (string) ($lokasi['koordinat'] ?? ''));
        $this->assertStringContainsString('109.112500', (string) ($lokasi['koordinat'] ?? ''));
        // Luas belum terkonfirmasi: tidak boleh tampil.
        $this->assertArrayNotHasKey('luas', $lokasi);
    }

    public function test_nav_has_no_dead_links_or_intranet_ips(): void
    {
        $props = $this->get('/')->inertiaProps();
        $items = $props['site']['nav'] ?? [];

        $this->assertNotEmpty($items);

        $joined = json_encode($items);

        $this->assertStringNotContainsString('#', $joined);
        $this->assertStringNotContainsString('192.168.', $joined);
        $this->assertStringNotContainsString('xxx', strtolower($joined));
    }

    public function test_other_desa_statistik_never_leaks_to_home(): void
    {
        $desaB = Desa::where('slug', 'desa-b')->firstOrFail();
        Statistik::seedDefaults($desaB);
        Statistik::forDesa($desaB)->where('kunci', 'total_jiwa')->update(['nilai' => '9999']);

        $props = $this->get('http://kepandean.test/')->inertiaProps();

        $this->assertNotSame('9999', (string) ($props['statistik']['total_jiwa'] ?? ''));
    }

    public function test_public_pages_all_render_for_footer_parity(): void
    {
        $this->get('/')->assertOk();
        $this->get('/profil/sejarah')->assertOk();
        $this->get('/profil/visi-misi')->assertOk();
        $this->get('/segera-hadir/layanan')->assertOk();
    }

    public function test_segera_hadir_page_is_honest_under_development(): void
    {
        $this->get('/segera-hadir/layanan')
            ->assertOk()
            ->assertInertia(function ($page) {
                $page->component('segera-hadir');
                $page->where('modul', 'layanan');
            });
    }
}
