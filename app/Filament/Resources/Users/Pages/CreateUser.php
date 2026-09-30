<?php

namespace App\Filament\Resources\Users\Pages;

use App\Filament\Resources\Users\UserResource;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User && ($user->isAdminDesa() || $user->isTechade()), 403);

        // Techade wajib memilih desa di form; admin_desa dikunci ke desanya sendiri.
        if ($user->isTechade()) {
            abort_unless(filled($data['desa_id'] ?? null), 422);
        } else {
            $data['desa_id'] = $user->desa_id;
        }

        // Hanya techade yang boleh membuat akun techade.
        if (($data['role'] ?? null) === 'techade') {
            abort_unless($user->isTechade(), 403);
        }

        return $data;
    }
}
