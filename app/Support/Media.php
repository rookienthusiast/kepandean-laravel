<?php

namespace App\Support;

use Filament\Forms\Components\FileUpload;
use Illuminate\Http\UploadedFile;

/**
 * Satu-satunya seam kebijakan media: disk publik, batas 5 MB, visibilitas
 * publik, dan direktori per konteks. Spatie Asset (konversi thumb/preview)
 * dan FileUpload Filament duduk di seam ini sebagai adapter: keduanya
 * membaca konstanta yang sama sehingga kebijakan tidak restated per form.
 */
final class Media
{
    public const DISK = 'public';

    public const MAX_SIZE_KB = 5120;

    public static function upload(string $field, string $directory, ?string $label = null): FileUpload
    {
        $component = FileUpload::make($field)
            ->image()
            ->disk(self::DISK)
            ->maxSize(self::MAX_SIZE_KB)
            ->directory($directory)
            ->visibility(self::DISK);

        if ($label !== null) {
            $component->label($label);
        }

        return $component;
    }

    public static function storeUploaded(UploadedFile $file, string $directory): string
    {
        $path = $file->store($directory, self::DISK);

        if ($path === false) {
            throw new \RuntimeException("Gagal menyimpan berkas ke disk '".self::DISK."'.");
        }

        return $path;
    }

    public static function url(?string $path): ?string
    {
        return $path ? asset('storage/'.$path) : null;
    }
}
