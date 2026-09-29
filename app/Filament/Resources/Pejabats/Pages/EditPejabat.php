<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPejabat extends EditRecord
{
    protected static string $resource = PejabatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
