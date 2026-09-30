<?php

namespace App\Filament\Resources\Beritas\Schemas;

use App\Models\Berita;
use App\Models\Desa;
use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Unique;

class BeritaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('desa_id')
                    ->label('Desa')
                    ->options(fn (): array => Desa::query()->orderBy('name')->pluck('name', 'id')->all())
                    ->required()
                    ->live()
                    ->visible(fn (): bool => auth()->user() instanceof User && auth()->user()->isTechade()),
                Select::make('kategori_id')
                    ->label('Kategori')
                    ->options(function (): array {
                        $user = auth()->user();

                        $query = Kategori::query()->orderBy('nama');

                        if ($user instanceof User && ! $user->isTechade() && $user->desa_id !== null) {
                            $query->where('desa_id', $user->desa_id);
                        }

                        return $query->pluck('nama', 'id')->all();
                    })
                    ->required()
                    ->searchable(),
                TextInput::make('judul')
                    ->label('Judul')
                    ->required()
                    ->maxLength(200)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (Set $set, ?string $state): void {
                        $set('slug', Str::slug((string) $state));
                    }),
                TextInput::make('slug')
                    ->label('Slug')
                    ->required()
                    ->maxLength(220)
                    ->helperText('Otomatis dari judul, bisa diedit. Unik per desa.')
                    ->unique(
                        table: 'beritas',
                        column: 'slug',
                        ignoreRecord: true,
                        modifyRuleUsing: function (Unique $rule, Get $get): Unique {
                            $user = auth()->user();

                            $desaId = $user instanceof User && ! $user->isTechade()
                                ? $user->desa_id
                                : $get('desa_id');

                            return $rule->where('desa_id', $desaId);
                        },
                    ),
                RichEditor::make('isi')
                    ->label('Isi')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('cover_path')
                    ->label('Cover')
                    ->image()
                    ->maxSize(5120)
                    ->directory('berita')
                    ->visibility('public')
                    ->helperText('Wajib bertipe gambar (jpg/png/webp/gif/svg).'),
                Select::make('status')
                    ->label('Status')
                    ->options(Berita::statusOptions())
                    ->default(Berita::STATUS_DRAFT)
                    ->required(),
                DateTimePicker::make('published_at')
                    ->label('Tanggal terbit')
                    ->helperText('Diisi otomatis saat diterbitkan bila kosong.'),
            ]);
    }
}
