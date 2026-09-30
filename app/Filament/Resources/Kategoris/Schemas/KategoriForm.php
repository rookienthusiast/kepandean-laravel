<?php

namespace App\Filament\Resources\Kategoris\Schemas;

use App\Models\Desa;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Unique;

class KategoriForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('desa_id')
                    ->label('Desa')
                    ->options(fn (): array => Desa::query()->orderBy('name')->pluck('name', 'id')->all())
                    ->required()
                    ->visible(fn (): bool => auth()->user() instanceof User && auth()->user()->isTechade()),
                TextInput::make('nama')
                    ->label('Nama')
                    ->required()
                    ->maxLength(120)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (Set $set, ?string $state): void {
                        $set('slug', Str::slug((string) $state));
                    }),
                TextInput::make('slug')
                    ->label('Slug')
                    ->required()
                    ->maxLength(140)
                    ->helperText('Otomatis dari nama, bisa diedit. Unik per desa.')
                    ->unique(
                        table: 'kategoris',
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
            ]);
    }
}
