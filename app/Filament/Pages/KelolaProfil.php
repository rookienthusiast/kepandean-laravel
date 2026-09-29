<?php

namespace App\Filament\Pages;

use App\Models\Desa;
use App\Models\Profil;
use App\Models\User;
use App\Support\HtmlSanitizer;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\RichEditor;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns;
use Filament\Pages\Page;
use Filament\Schemas\Components\Actions;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\EmbeddedSchema;
use Filament\Schemas\Components\Form;
use Filament\Schemas\Schema;
use Filament\Support\Exceptions\Halt;
use Filament\Support\Icons\Heroicon;
use Illuminate\Contracts\Support\Htmlable;
use Throwable;

/**
 * @property-read Schema $form
 */
class KelolaProfil extends Page
{
    use Concerns\CanUseDatabaseTransactions;

    /**
     * @var array<string, mixed> | null
     */
    public ?array $data = [];

    public ?Profil $profil = null;

    protected static ?string $slug = 'profil';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBookOpen;

    public static function getLabel(): string
    {
        return 'Profil Desa';
    }

    public function getTitle(): string|Htmlable
    {
        return static::getLabel();
    }

    public static function canAccess(): bool
    {
        $user = auth()->user();

        return $user instanceof User && $user->canPublish();
    }

    public function mount(): void
    {
        $user = auth()->user();

        abort_unless($user instanceof User && $user->canPublish(), 403);

        $desa = $user->desa()->first();

        abort_unless($desa instanceof Desa, 404);

        $this->profil = Profil::forDesa($desa);

        $this->fillForm();
    }

    protected function fillForm(): void
    {
        $data = $this->profil->attributesToArray();

        $this->callHook('beforeFill');

        $this->form->fill($data);

        $this->callHook('afterFill');
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected function mutateFormDataBeforeSave(array $data): array
    {
        foreach (['sejarah', 'visi', 'misi'] as $field) {
            $value = $data[$field] ?? null;
            $data[$field] = is_string($value) ? HtmlSanitizer::clean($value) : '';
        }

        return $data;
    }

    public function save(): void
    {
        try {
            $this->beginDatabaseTransaction();

            $this->callHook('beforeValidate');

            $data = $this->form->getState();

            $this->callHook('afterValidate');

            $data = $this->mutateFormDataBeforeSave($data);

            $this->callHook('beforeSave');

            $this->profil->update($data);

            $this->callHook('afterSave');
        } catch (Halt $exception) {
            $exception->shouldRollbackDatabaseTransaction() ?
                $this->rollBackDatabaseTransaction() :
                $this->commitDatabaseTransaction();

            return;
        } catch (Throwable $exception) {
            $this->rollBackDatabaseTransaction();

            throw $exception;
        }

        $this->commitDatabaseTransaction();

        $this->getSavedNotification()?->send();
    }

    protected function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Profil desa tersimpan.');
    }

    public function defaultForm(Schema $schema): Schema
    {
        return $schema
            ->operation('edit')
            ->model($this->profil)
            ->statePath('data');
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                RichEditor::make('sejarah')
                    ->label('Sejarah')
                    ->columnSpanFull(),
                RichEditor::make('visi')
                    ->label('Visi')
                    ->columnSpanFull(),
                RichEditor::make('misi')
                    ->label('Misi')
                    ->columnSpanFull(),
            ]);
    }

    /**
     * @return array<Action | ActionGroup>
     */
    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Simpan')
                ->submit('save')
                ->keyBindings(['mod+s']),
        ];
    }

    public function content(Schema $schema): Schema
    {
        return $schema
            ->components([
                $this->getFormContentComponent(),
            ]);
    }

    public function getFormContentComponent(): Component
    {
        return Form::make([EmbeddedSchema::make('form')])
            ->id('form')
            ->livewireSubmitHandler('save')
            ->footer([
                Actions::make($this->getFormActions())->key('form-actions'),
            ]);
    }
}
