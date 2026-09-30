<?php

namespace App\Filament\Resources\Beritas\Pages;

use App\Filament\Resources\Beritas\BeritaResource;
use App\Models\Berita;
use App\Models\Kategori;
use App\Models\User;
use App\Support\HtmlSanitizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Gate;

class EditBerita extends EditRecord
{
    protected static string $resource = BeritaResource::class;

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

        // Desa dikunci: non-techade tidak bisa memindahkan berita antar desa.
        if (! $user->isTechade()) {
            abort_unless($user->desa_id !== null, 403);

            $data['desa_id'] = $user->desa_id;
        }

        // Editor boleh simpan draft; tombol publish ditolak (aturan #13).
        if (($data['status'] ?? Berita::STATUS_DRAFT) === Berita::STATUS_PUBLISHED) {
            Gate::forUser($user)->authorize('publish-content');
        }

        $kategori = Kategori::withoutGlobalScope('desa')->find($data['kategori_id'] ?? null);

        $recordDesaId = $this->record instanceof Berita ? $this->record->desa_id : null;

        abort_unless($kategori instanceof Kategori && $kategori->desa_id === (int) ($data['desa_id'] ?? $recordDesaId), 422);

        $data['isi'] = HtmlSanitizer::clean($data['isi'] ?? '');

        if (($data['status'] ?? null) === Berita::STATUS_PUBLISHED && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        return $data;
    }
}
