<?php

namespace App\Filament\Resources\Statistiks\Pages;

use App\Filament\Resources\Statistiks\StatistikResource;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreateStatistik extends CreateRecord
{
    protected static string $resource = StatistikResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data = DesaScoping::resolveDesaIdForCreate($data);

        return $data;
    }
}
