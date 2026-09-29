<?php

namespace App\Filament\Resources\Pejabats\Pages;

use App\Filament\Resources\Pejabats\PejabatResource;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;

class CreatePejabat extends CreateRecord
{
    protected static string $resource = PejabatResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User && $user->desa_id !== null, 403);

        $data['desa_id'] = $user->desa_id;

        return $data;
    }
}
