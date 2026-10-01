<?php

namespace App\Filament\Resources\HeroSlides\Pages;

use App\Filament\Resources\HeroSlides\HeroSlideResource;
use App\Support\Filament\DesaScoping;
use Filament\Resources\Pages\CreateRecord;

class CreateHeroSlide extends CreateRecord
{
    protected static string $resource = HeroSlideResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data = DesaScoping::resolveDesaIdForCreate($data);

        return $data;
    }
}
