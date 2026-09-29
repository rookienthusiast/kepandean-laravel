<?php

namespace Database\Seeders;

use App\Models\Desa;
use App\Models\Pejabat;
use Illuminate\Database\Seeder;

class PejabatSeeder extends Seeder
{
    public function run(): void
    {
        $desa = Desa::where('slug', 'kepandean')->first();

        if (! $desa instanceof Desa) {
            return;
        }

        $rows = [
            ['nama' => 'Wastedjo', 'jabatan' => 'Kepala Desa', 'kelompok' => Pejabat::KELOMPOK_PIMPINAN, 'urutan' => 1],
            ['nama' => 'Heri A. Tiar', 'jabatan' => 'Sekretaris Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'urutan' => 2],
            ['nama' => 'Nurcholis', 'jabatan' => 'Bendahara Desa', 'kelompok' => Pejabat::KELOMPOK_PERANGKAT, 'urutan' => 3],
            ['nama' => 'Daryono', 'jabatan' => 'Ketua RW', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 05', 'urutan' => 4],
            ['nama' => 'Ratmo', 'jabatan' => 'Ketua RW', 'kelompok' => Pejabat::KELOMPOK_WILAYAH, 'wilayah_label' => 'RW 06', 'urutan' => 5],
        ];

        foreach ($rows as $row) {
            Pejabat::withoutGlobalScope('desa')->firstOrCreate(
                ['desa_id' => $desa->id, 'nama' => $row['nama']],
                $row + ['desa_id' => $desa->id]
            );
        }
    }
}
