<?php

namespace App\Filament\Resources\Pejabats\Tables;

use App\Models\Pejabat;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class PejabatsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('foto_path')->label('Foto')->circular(),
                TextColumn::make('nama')->label('Nama')->searchable(),
                TextColumn::make('jabatan')->label('Jabatan')->searchable(),
                TextColumn::make('kelompok')
                    ->label('Kelompok')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => Pejabat::kelompokOptions()[$state] ?? $state),
                TextColumn::make('wilayah_label')->label('Wilayah')->searchable(),
                TextColumn::make('urutan')->label('Urut')->sortable(),
            ])
            ->filters([
                SelectFilter::make('kelompok')
                    ->label('Kelompok')
                    ->options(Pejabat::kelompokOptions()),
            ])
            ->defaultSort('urutan')
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
