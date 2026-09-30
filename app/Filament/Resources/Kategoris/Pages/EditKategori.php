<?php

namespace App\Filament\Resources\Kategoris\Pages;

use App\Filament\Resources\Kategoris\KategoriResource;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditKategori extends EditRecord
{
    protected static string $resource = KategoriResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        // Desa dikunci: non-techade tidak bisa memindahkan kategori antar desa.
        if (! $user->isTechade()) {
            abort_unless($user->desa_id !== null, 403);

            $data['desa_id'] = $user->desa_id;
        }

        return $data;
    }
}
