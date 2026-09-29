<?php

namespace Database\Seeders;

use App\Models\Desa;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(DesaSeeder::class);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $kepandean = Desa::where('slug', 'kepandean')->first();

        User::factory()->create([
            'name' => 'Admin Kepandean',
            'email' => 'admin@kepandean.test',
            'password' => 'password',
            'desa_id' => $kepandean?->id,
            'role' => 'admin_desa',
            'email_verified_at' => now(),
        ]);

        $this->call(PejabatSeeder::class);
    }
}
