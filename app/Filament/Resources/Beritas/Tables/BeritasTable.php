<?php

namespace App\Filament\Resources\Beritas\Tables;

use App\Models\Berita;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class BeritasTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('cover_path')->label('Cover')->circular(),
                TextColumn::make('judul')->label('Judul')->searchable()->limit(50),
                TextColumn::make('kategori.nama')->label('Kategori'),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => Berita::statusOptions()[$state] ?? $state),
                TextColumn::make('published_at')->label('Terbit')->dateTime('d M Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('kategori_id')
                    ->label('Kategori')
                    ->relationship('kategori', 'nama'),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options(Berita::statusOptions()),
            ])
            ->defaultSort('published_at', 'desc')
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
