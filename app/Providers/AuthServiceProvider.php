<?php

namespace App\Providers;

use App\Models\User;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        User::class => UserPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('upload-media', function (User $user) {
            $role = $user->getAttribute('role');

            return $user->hasVerifiedEmail()
                && is_string($role)
                && in_array($role, ['techade', 'admin_desa', 'editor'], true);
        });

        Gate::define('publish-content', function (User $user) {
            return $user->canPublish();
        });

        Gate::define('manage-users', function (User $user) {
            return $user->canManageUsers();
        });
    }
}
