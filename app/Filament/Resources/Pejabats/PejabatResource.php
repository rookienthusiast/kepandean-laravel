<?php

namespace App\Filament\Resources\Pejabats;

use App\Filament\Resources\Pejabats\Pages\CreatePejabat;
use App\Filament\Resources\Pejabats\Pages\EditPejabat;
use App\Filament\Resources\Pejabats\Pages\ListPejabats;
use App\Filament\Resources\Pejabats\Schemas\PejabatForm;
use App\Filament\Resources\Pejabats\Tables\PejabatsTable;
use App\Models\Pejabat;
use App\Support\Filament\DesaScoping;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

/**
 * Issue #15: Struktur Organisasi + roster RT/RW, terurut by nomor urut.
 * Scope per-desa mengikuti pola UserResource/StatistikResource.
 */
class PejabatResource extends Resource
{
    protected static ?string $model = Pejabat::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserGroup;

    protected static UnitEnum|string|null $navigationGroup = 'Konten';

    protected static ?string $recordTitleAttribute = 'nama';

    public static function getLabel(): string
    {
        return 'Pejabat';
    }

    public static function getPluralLabel(): string
    {
        return 'Struktur Organisasi';
    }

    /** @return Builder<Pejabat> */
    public static function getEloquentQuery(): Builder
    {
        return DesaScoping::scopeForAdmin(Pejabat::query());
    }

    public static function form(Schema $schema): Schema
    {
        return PejabatForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PejabatsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPejabats::route('/'),
            'create' => CreatePejabat::route('/create'),
            'edit' => EditPejabat::route('/{record}/edit'),
        ];
    }
}
