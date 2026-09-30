<?php

namespace App\Filament\Resources\Kategoris;

use App\Filament\Resources\Kategoris\Pages\CreateKategori;
use App\Filament\Resources\Kategoris\Pages\EditKategori;
use App\Filament\Resources\Kategoris\Pages\ListKategoris;
use App\Filament\Resources\Kategoris\Schemas\KategoriForm;
use App\Filament\Resources\Kategoris\Tables\KategorisTable;
use App\Models\Kategori;
use App\Models\User;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

/**
 * Issue #16: Kategori sederhana (nama + slug), dipakai sebagai filter
 * di index Berita. Dibuat dulu sebelum Berita (Berita butuh FK kategori).
 */
class KategoriResource extends Resource
{
    protected static ?string $model = Kategori::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTag;

    protected static UnitEnum|string|null $navigationGroup = 'Konten';

    protected static ?string $recordTitleAttribute = 'nama';

    public static function getLabel(): string
    {
        return 'Kategori';
    }

    public static function getPluralLabel(): string
    {
        return 'Kategori';
    }

    /** @return Builder<Kategori> */
    public static function getEloquentQuery(): Builder
    {
        $query = Kategori::query();

        $user = auth()->user();

        if (! $user instanceof User) {
            return $query->whereRaw('1 = 0');
        }

        // Techade: akses semua desa, tanpa scope desa_id.
        if ($user->isTechade()) {
            return $query;
        }

        if ($user->desa_id === null) {
            return $query->whereRaw('1 = 0');
        }

        return $query->where('desa_id', $user->desa_id);
    }

    public static function form(Schema $schema): Schema
    {
        return KategoriForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KategorisTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListKategoris::route('/'),
            'create' => CreateKategori::route('/create'),
            'edit' => EditKategori::route('/{record}/edit'),
        ];
    }
}
