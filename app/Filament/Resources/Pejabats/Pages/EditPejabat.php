<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use App\Support\Filament\DesaScoping;
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

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Admin desa tidak boleh memindahkan baris ke desa lain (dikunci eksplisit).
        $data = DesaScoping::lockDesaIdForSave($data);

        return $data;
    }
}
