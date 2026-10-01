<?php

namespace App\Filament\Resources\Kategoris\Pages;

use App\Filament\Resources\Kategoris\KategoriResource;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreateKategori extends CreateRecord
{
    protected static string $resource = KategoriResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data = DesaScoping::resolveDesaIdForCreate($data);

        return $data;
    }
}
