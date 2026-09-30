<?php

namespace App\Filament\Resources\Kategoris\Pages;

use App\Filament\Resources\Kategoris\KategoriResource;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;

class CreateKategori extends CreateRecord
{
    protected static string $resource = KategoriResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        // Techade wajib memilih desa di form; selain itu dikunci ke desa sendiri.
        if ($user->isTechade()) {
            abort_unless(filled($data['desa_id'] ?? null), 422);

            return $data;
        }

        abort_unless($user->desa_id !== null, 403);

        $data['desa_id'] = $user->desa_id;

        return $data;
    }
}
