<?php

namespace App\Filament\Resources\MenuItems\Pages;

use App\Filament\Resources\MenuItems\MenuItemResource;
use App\Models\MenuItem;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMenuItem extends EditRecord
{
    protected static string $resource = MenuItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        abort_unless(auth()->user() instanceof User, 403);

        $data = DesaScoping::lockDesaIdForSave($data);

        $recordDesaId = $this->record instanceof MenuItem ? $this->record->desa_id : null;

        MenuItem::assertValidParent(
            $data['parent_id'] ?? null,
            (int) ($data['desa_id'] ?? $recordDesaId),
            $this->record instanceof MenuItem ? $this->record->getKey() : null,
        );

        return $data;
    }
}
