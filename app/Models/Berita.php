<?php

namespace App\Models;

use App\Concerns\BelongsToDesa;
use App\Support\HtmlSanitizer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Berita extends Model
{
    use BelongsToDesa;

    public const STATUS_DRAFT = 'draft';

    public const STATUS_PUBLISHED = 'published';

    protected $fillable = [
        'desa_id',
        'kategori_id',
        'judul',
        'slug',
        'isi',
        'cover_path',
        'status',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    /** @return array<string, string> */
    public static function statusOptions(): array
    {
        return [
            self::STATUS_DRAFT => 'Draft',
            self::STATUS_PUBLISHED => 'Published',
        ];
    }

    /** @return BelongsTo<Kategori, $this> */
    public function kategori(): BelongsTo
    {
        return $this->belongsTo(Kategori::class);
    }

    /** @return Builder<self> */
    public static function forDesa(Desa $desa): Builder
    {
        return static::withoutGlobalScope('desa')->where('desa_id', $desa->id);
    }

    /** @return Builder<self> */
    public static function publishedForDesa(Desa $desa): Builder
    {
        return static::forDesa($desa)->where('status', self::STATUS_PUBLISHED);
    }

    public function isPublished(): bool
    {
        return $this->status === self::STATUS_PUBLISHED;
    }

    protected static function booted(): void
    {
        static::saving(function (self $berita): void {
            $berita->isi = HtmlSanitizer::clean((string) $berita->isi);
        });
    }
}
