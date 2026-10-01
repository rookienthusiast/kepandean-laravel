<?php

namespace App\Filament\Resources\Kegiatans\Pages;

use App\Filament\Resources\Kegiatans\KegiatanResource;
use App\Models\Kegiatan;
use App\Models\User;
use App\Support\Filament\DesaScoping;
use App\Support\HtmlSanitizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Gate;

class EditKegiatan extends EditRecord
{
    protected static string $resource = KegiatanResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        // Desa dikunci: non-techade tidak bisa memindahkan kegiatan antar desa.
        $data = DesaScoping::lockDesaIdForSave($data);

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
