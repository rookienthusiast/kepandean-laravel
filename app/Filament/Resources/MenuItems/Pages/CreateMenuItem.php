<?php

namespace App\Filament\Resources\MenuItems\Pages;

use App\Filament\Resources\MenuItems\MenuItemResource;
use App\Models\MenuItem;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreateMenuItem extends CreateRecord
{
    protected static string $resource = MenuItemResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        abort_unless(auth()->user() instanceof User, 403);

        $data = DesaScoping::resolveDesaIdForCreate($data);

        MenuItem::assertValidParent($data['parent_id'] ?? null, (int) $data['desa_id']);

        return $data;
    }
}
