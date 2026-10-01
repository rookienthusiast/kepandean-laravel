<?php

namespace App\Filament\Resources\Kegiatans;

use App\Filament\Resources\Kegiatans\Pages\CreateKegiatan;
use App\Filament\Resources\Kegiatans\Pages\EditKegiatan;
use App\Filament\Resources\Kegiatans\Pages\ListKegiatans;
use App\Filament\Resources\Kegiatans\Schemas\KegiatanForm;
use App\Filament\Resources\Kegiatans\Tables\KegiatansTable;
use App\Models\Kegiatan;
use App\Support\Filament\DesaScoping;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

/**
 * Issue #17: meniru BeritaResource (#16) versi ringan , tanpa kategori/cover.
 * Editor boleh simpan draft; publish hanya canPublish() (admin_desa/techade).
 */
class KegiatanResource extends Resource
{
    protected static ?string $model = Kegiatan::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMegaphone;

    protected static UnitEnum|string|null $navigationGroup = 'Konten';

    protected static ?string $recordTitleAttribute = 'judul';

    // Slug eksplisit: turunan otomatis Filament memberi
    // `kegiatans/pengumumen` untuk namespace bertingkat ini.
    protected static ?string $slug = 'kegiatans';

    public static function getLabel(): string
    {
        return 'Kegiatan';
    }

    public static function getPluralLabel(): string
    {
        return 'Kegiatan';
    }

    /** @return Builder<Kegiatan> */
    public static function getEloquentQuery(): Builder
    {
        return DesaScoping::scopeForAdmin(Kegiatan::query());
    }

    public static function form(Schema $schema): Schema
    {
        return KegiatanForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KegiatansTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListKegiatans::route('/'),
            'create' => CreateKegiatan::route('/create'),
            'edit' => EditKegiatan::route('/{record}/edit'),
        ];
    }
}
