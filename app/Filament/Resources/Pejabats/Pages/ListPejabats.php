<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPejabats extends ListRecords
{
    protected static string $resource = PejabatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
