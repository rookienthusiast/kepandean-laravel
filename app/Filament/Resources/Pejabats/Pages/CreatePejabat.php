<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreatePejabat extends CreateRecord
{
    protected static string $resource = PejabatResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data = DesaScoping::resolveDesaIdForCreate($data);

        return $data;
    }
}
