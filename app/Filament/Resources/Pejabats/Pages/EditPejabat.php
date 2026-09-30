<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use App\Models\User;
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
        $user = auth()->user();

        // Admin desa tidak boleh memindahkan baris ke desa lain.
        if (! ($user instanceof User && $user->isTechade())) {
            unset($data['desa_id']);
        }

        return $data;
    }
}
