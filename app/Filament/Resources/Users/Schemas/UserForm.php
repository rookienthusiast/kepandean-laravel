<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Models\Desa;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Hash;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama')
                    ->required()
                    ->maxLength(255),
                TextInput::make('email')
                    ->label('Surel')
                    ->email()
                    ->required()
                    ->maxLength(255)
                    ->unique(table: User::class, column: 'email', ignoreRecord: true),
                Select::make('desa_id')
                    ->label('Desa')
                    ->options(fn (): array => Desa::query()->orderBy('name')->pluck('name', 'id')->all())
                    ->required()
                    ->live()
                    ->searchable()
                    ->helperText('Techade wajib memilih desa; admin desa dikunci ke desanya otomatis.')
                    // Hanya techade yang memilih desa; admin_desa dikunci ke desanya sendiri.
                    ->visible(fn (): bool => auth()->user() instanceof User && auth()->user()->isTechade()),
                Select::make('role')
                    ->label('Role')
                    ->helperText('Hanya techade yang boleh memberi role techade.')
                    ->options(function (): array {
                        $user = auth()->user();

                        if ($user instanceof User && $user->isTechade()) {
                            return [
                                'techade' => 'Techade',
                                'admin_desa' => 'Admin Desa',
                                'editor' => 'Editor',
                            ];
                        }

                        return [
                            'admin_desa' => 'Admin Desa',
                            'editor' => 'Editor',
                        ];
                    })
                    ->required(),
                TextInput::make('password')
                    ->label('Kata sandi')
                    ->password()
                    ->revealable()
                    ->helperText('Kosongkan bila tidak ingin mengubah kata sandi.')
                    ->dehydrateStateUsing(fn (string $state): string => Hash::make($state))
                    ->dehydrated(fn (?string $state): bool => filled($state))
                    ->required(fn (string $operation): bool => $operation === 'create'),
            ]);
    }
}
