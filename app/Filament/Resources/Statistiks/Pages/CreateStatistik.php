<?php

namespace App\Filament\Resources\Statistiks\Pages;

use App\Filament\Resources\Statistiks\StatistikResource;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;

class CreateStatistik extends CreateRecord
{
    protected static string $resource = StatistikResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User && $user->desa_id !== null, 403);

        $data['desa_id'] = $user->desa_id;

        return $data;
    }
}
