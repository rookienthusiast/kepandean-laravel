<?php

namespace App\Filament\Resources\Users\Pages;

use App\Filament\Resources\Users\UserResource;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User && ($user->isAdminDesa() || $user->isTechade()), 403);

        // Admin desa tidak boleh memindahkan user ke desa lain (dikunci eksplisit).
        $data = DesaScoping::lockDesaIdForSave($data);

        // Hanya techade yang boleh memberi role techade.
        if (($data['role'] ?? null) === 'techade') {
            abort_unless($user->isTechade(), 403);
        }

        return $data;
    }
}
