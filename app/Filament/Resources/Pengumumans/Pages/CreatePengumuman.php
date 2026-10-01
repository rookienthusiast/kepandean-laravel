<?php

namespace App\Filament\Resources\Pengumumans\Pages;

use App\Filament\Resources\Pengumumans\PengumumanResource;
use App\Models\Pengumuman;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use App\Support\HtmlSanitizer;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Gate;

class CreatePengumuman extends CreateRecord
{
    protected static string $resource = PengumumanResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        $data = DesaScoping::resolveDesaIdForCreate($data);

        // Editor boleh simpan draft; tombol publish ditolak (aturan #13).
        if (($data['status'] ?? Pengumuman::STATUS_DRAFT) === Pengumuman::STATUS_PUBLISHED) {
            Gate::forUser($user)->authorize('publish-content');
        }

        $data['isi'] = HtmlSanitizer::clean($data['isi'] ?? '');

        if (($data['status'] ?? null) === Pengumuman::STATUS_PUBLISHED && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        return $data;
    }
}
