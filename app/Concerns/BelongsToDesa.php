<?php

namespace App\Concerns;

use App\Models\Desa;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\App;

trait BelongsToDesa
{
    protected static function booted(): void
    {
        static::addGlobalScope('desa', function (Builder $builder) {
            $desa = App::bound('current_desa') ? App::make('current_desa') : null;

            if ($desa instanceof Desa) {
                $builder->where('desa_id', $desa->id);
            }
        });
    }

    /** @return BelongsTo<Desa, $this> */
    public function desa(): BelongsTo
    {
        return $this->belongsTo(Desa::class);
    }
}
