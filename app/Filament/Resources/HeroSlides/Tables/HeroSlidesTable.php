<?php

namespace App\Filament\Resources\HeroSlides\Tables;

use App\Support\Filament\DesaScoping;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class HeroSlidesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('gambar_path')->label('Gambar')->circular(),
                TextColumn::make('desa.name')
                    ->label('Desa')
                    ->searchable()
                    ->sortable()
                    ->visible(fn (): bool => DesaScoping::isTechadeContext()),
                TextColumn::make('judul')->label('Judul')->searchable()->limit(50),
                TextColumn::make('urutan')->label('Urutan')->sortable(),
                ToggleColumn::make('aktif')->label('Aktif'),
                TextColumn::make('updated_at')->label('Diubah')->dateTime()->sortable(),
            ])
            ->filters([
                SelectFilter::make('desa_id')
                    ->label('Desa')
                    ->relationship('desa', 'name')
                    ->visible(fn (): bool => DesaScoping::isTechadeContext()),
                SelectFilter::make('aktif')
                    ->label('Status')
                    ->options(['1' => 'Aktif', '0' => 'Nonaktif']),
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
