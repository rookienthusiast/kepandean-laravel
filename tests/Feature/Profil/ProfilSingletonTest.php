<?php

namespace Tests\Feature\Profil;

use App\Filament\Pages\KelolaProfil;
use App\Models\Desa;
use App\Models\Profil;
use App\Models\User;
use Database\Seeders\DesaSeeder;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\App;
use Livewire\Livewire;
use Tests\TestCase;

class ProfilSingletonTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DesaSeeder::class);
    }

    private function makeUser(string $role, string $desaSlug): User
    {
        $desa = Desa::where('slug', $desaSlug)->firstOrFail();

        return User::factory()->create([
            'desa_id' => $desa->id,
            'role' => $role,
            'email_verified_at' => now(),
        ]);
    }

    public function test_admin_desa_can_open_profil_page(): void
    {
        $admin = $this->makeUser('admin_desa', 'kepandean');

        $this->actingAs($admin, 'web')->get('/admin/profil')->assertOk();
    }

    public function test_editor_is_forbidden_from_profil_page(): void
    {
        $editor = $this->makeUser('editor', 'kepandean');

        $this->actingAs($editor, 'web')->get('/admin/profil')->assertForbidden();
    }

    public function test_guest_is_redirected_from_profil_page(): void
    {
        $this->get('/admin/profil')->assertRedirect('/admin/login');
    }

    public function test_second_profil_for_same_desa_is_rejected(): void
    {
        $desa = Desa::where('slug', 'kepandean')->firstOrFail();

        // The seeder already created the singleton row for this desa.
        $this->expectException(QueryException::class);

        Profil::create(['desa_id' => $desa->id, 'sejarah' => '<p>Duplikat</p>']);
    }

    public function test_singleton_helpers_never_duplicate(): void
    {
        $desa = Desa::where('slug', 'kepandean')->firstOrFail();

        Profil::forDesa($desa);
        Profil::forDesa($desa);

        $this->assertSame(1, Profil::withoutGlobalScope('desa')->where('desa_id', $desa->id)->count());
    }

    public function test_profil_is_scoped_to_current_desa(): void
    {
        $desaA = Desa::where('slug', 'kepandean')->firstOrFail();
        $desaB = Desa::where('slug', 'desa-b')->firstOrFail();

        Profil::forDesa($desaA)->update(['sejarah' => '<p>A</p>']);
        Profil::forDesa($desaB)->update(['sejarah' => '<p>B</p>']);

        App::instance('current_desa', $desaA);

        $visible = Profil::all();

        $this->assertCount(1, $visible);
        $this->assertSame($desaA->id, $visible->first()->desa_id);
    }

    public function test_admin_update_sanitizes_rich_text(): void
    {
        $admin = $this->makeUser('admin_desa', 'kepandean');

        $this->actingAs($admin, 'web');

        Livewire::test(KelolaProfil::class)
            ->fillForm([
                'sejarah' => '<p>Sejarah</p><script>alert(1)</script>',
                'visi' => '<p>Visi</p>',
                'misi' => '<p>Misi</p>',
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $profil = Profil::withoutGlobalScope('desa')->where('desa_id', $admin->desa_id)->firstOrFail();

        $this->assertStringNotContainsString('<script', (string) $profil->sejarah);
        $this->assertStringContainsString('Sejarah', (string) $profil->sejarah);
    }
}
