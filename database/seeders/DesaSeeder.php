<?php

namespace Database\Seeders;

use App\Models\Desa;
use Illuminate\Database\Seeder;

class DesaSeeder extends Seeder
{
    public function run(): void
    {
        Desa::firstOrCreate(
            ['slug' => 'kepandean'],
            [
                'name' => 'Desa Kepandean',
                'slug' => 'kepandean',
                'domain' => 'kepandean.test',
                'is_default' => true,
            ]
        );

        Desa::firstOrCreate(
            ['slug' => 'desa-b'],
            [
                'name' => 'Desa B',
                'slug' => 'desa-b',
                'domain' => 'desa-b.test',
                'is_default' => false,
            ]
        );
    }
}
