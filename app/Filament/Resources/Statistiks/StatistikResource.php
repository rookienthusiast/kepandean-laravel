<?php

namespace App\Filament\Resources\Statistiks;

use App\Filament\Resources\Statistiks\Pages\CreateStatistik;
use App\Filament\Resources\Statistiks\Pages\EditStatistik;
use App\Filament\Resources\Statistiks\Pages\ListStatistiks;
use App\Filament\Resources\Statistiks\Schemas\StatistikForm;
use App\Filament\Resources\Statistiks\Tables\StatistiksTable;
use App\Models\Statistik;
use App\Models\User;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

/**
 * Issue #18: admin ubah angka Statistik tanpa developer; Beranda membaca
 * dari tabel ini. Scope per-desa mengikuti pola UserResource.
 */
class StatistikResource extends Resource
{
    protected static ?string $model = Statistik::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChartBar;

    protected static ?string $recordTitleAttribute = 'kunci';

    /** @return Builder<Statistik> */
    public static function getEloquentQuery(): Builder
    {
        $query = Statistik::query();

        $user = auth()->user();

        if (! $user instanceof User || $user->desa_id === null) {
            return $query->whereRaw('1 = 0');
        }

        return $query->where('desa_id', $user->desa_id);
    }

    public static function form(Schema $schema): Schema
    {
        return StatistikForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return StatistiksTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListStatistiks::route('/'),
            'create' => CreateStatistik::route('/create'),
            'edit' => EditStatistik::route('/{record}/edit'),
        ];
    }
}
