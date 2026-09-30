<?php

namespace App\Filament\Resources\Beritas\Pages;

use App\Filament\Resources\Beritas\BeritaResource;
use App\Models\Berita;
use App\Models\Kategori;
use App\Models\User;
use App\Support\HtmlSanitizer;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Gate;

class CreateBerita extends CreateRecord
{
    protected static string $resource = BeritaResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();

        abort_unless($user instanceof User, 403);

        // Techade wajib memilih desa di form; selain itu dikunci ke desa sendiri.
        if ($user->isTechade()) {
            abort_unless(filled($data['desa_id'] ?? null), 422);
        } else {
            abort_unless($user->desa_id !== null, 403);

            $data['desa_id'] = $user->desa_id;
        }

        // Editor boleh simpan draft; tombol publish ditolak (aturan #13).
        if (($data['status'] ?? Berita::STATUS_DRAFT) === Berita::STATUS_PUBLISHED) {
            Gate::forUser($user)->authorize('publish-content');
        }

        // Kategori harus milik desa yang sama.
        $kategori = Kategori::withoutGlobalScope('desa')->find($data['kategori_id'] ?? null);

        abort_unless($kategori instanceof Kategori && $kategori->desa_id === (int) $data['desa_id'], 422);

        $data['isi'] = HtmlSanitizer::clean($data['isi'] ?? '');

        if (($data['status'] ?? null) === Berita::STATUS_PUBLISHED && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        return $data;
    }
}
