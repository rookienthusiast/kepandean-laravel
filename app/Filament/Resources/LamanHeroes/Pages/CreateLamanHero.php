<?php

namespace App\Filament\Resources\LamanHeroes\Pages;

use App\Filament\Resources\LamanHeroes\LamanHeroResource;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreateLamanHero extends CreateRecord
{
    protected static string $resource = LamanHeroResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        abort_unless(auth()->user() instanceof User, 403);

        return DesaScoping::resolveDesaIdForCreate($data);
    }
}
