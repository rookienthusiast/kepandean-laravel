<?php

namespace App\Models;

use App\Concerns\BelongsToDesa;
use App\Support\HtmlSanitizer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    use BelongsToDesa;

    public const STATUS_DRAFT = 'draft';

    public const STATUS_PUBLISHED = 'published';

    protected $table = 'pengumumans';

    protected $fillable = [
        'desa_id',
        'judul',
        'slug',
        'isi',
        'status',
        'published_at',
        'expired_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'expired_at' => 'datetime',
    ];

    /** @return array<string, string> */
    public static function statusOptions(): array
    {
        return [
            self::STATUS_DRAFT => 'Draft',
            self::STATUS_PUBLISHED => 'Published',
        ];
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

    /**
     * Yang tayang = published DAN belum kedaluarsa.
     * Kedaluarsa = hilang (tak tampil di index, detail 404) — pilihan
     * pertama issue #17 ("404 atau jelas berlabel kedaluarsa").
     *
     * @return Builder<self>
     */
    public static function visibleForDesa(Desa $desa): Builder
    {
        return static::publishedForDesa($desa)->where(function (Builder $query): void {
            $query->whereNull('expired_at')->orWhere('expired_at', '>', now());
        });
    }

    public function isPublished(): bool
    {
        return $this->status === self::STATUS_PUBLISHED;
    }

    public function isExpired(): bool
    {
        return $this->expired_at !== null && ! $this->expired_at->isFuture();
    }

    protected static function booted(): void
    {
        static::saving(function (self $pengumuman): void {
            $pengumuman->isi = HtmlSanitizer::clean((string) $pengumuman->isi);
        });
    }
}
