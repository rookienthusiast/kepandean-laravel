<?php

namespace App\Filament\Resources\Kegiatans\Tables;

use App\Models\Kegiatan;
use App\Support\Filament\DesaScoping;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class KegiatansTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('cover_path')->label('Cover')->circular(),
                TextColumn::make('desa.name')
                    ->label('Desa')
                    ->searchable()
                    ->sortable()
                    ->visible(fn (): bool => DesaScoping::isTechadeContext()),
                TextColumn::make('judul')->label('Judul')->searchable()->limit(50),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => Kegiatan::statusOptions()[$state] ?? $state),
                TextColumn::make('published_at')->label('Terbit')->dateTime('d M Y H:i')->sortable(),
                TextColumn::make('expired_at')->label('Kedaluarsa')->dateTime('d M Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('desa_id')
                    ->label('Desa')
                    ->relationship('desa', 'name')
                    ->visible(fn (): bool => DesaScoping::isTechadeContext()),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options(Kegiatan::statusOptions()),
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
