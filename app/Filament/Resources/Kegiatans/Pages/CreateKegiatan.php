<?php

namespace App\Filament\Resources\Kegiatans\Pages;

use App\Filament\Resources\Kegiatans\KegiatanResource;
use App\Models\Kegiatan;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use App\Support\HtmlSanitizer;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Gate;

class CreateKegiatan extends CreateRecord
{
    protected static string $resource = KegiatanResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        $data = DesaScoping::resolveDesaIdForCreate($data);

        // Editor boleh simpan draft; tombol publish ditolak (aturan #13).
        if (($data['status'] ?? Kegiatan::STATUS_DRAFT) === Kegiatan::STATUS_PUBLISHED) {
            Gate::forUser($user)->authorize('publish-content');
        }

        $data['isi'] = HtmlSanitizer::clean($data['isi'] ?? '');

        if (($data['status'] ?? null) === Kegiatan::STATUS_PUBLISHED && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        return $data;
    }
}
