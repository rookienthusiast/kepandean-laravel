<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdminDesa() || $user->isTechade();
    }

    public function view(User $user, User $model): bool
    {
        if ($user->isTechade()) {
            return true;
        }

        return $user->isAdminDesa() && $user->desa_id === $model->desa_id;
    }

    public function create(User $user): bool
    {
        return $user->isAdminDesa() || $user->isTechade();
    }

    public function update(User $user, User $model): bool
    {
        if ($user->isTechade()) {
            return true;
        }

        return $user->isAdminDesa() && $user->desa_id === $model->desa_id;
    }

    public function delete(User $user, User $model): bool
    {
        if ($user->isTechade()) {
            return $user->isNot($model);
        }

        return $user->isAdminDesa()
            && $user->desa_id === $model->desa_id
            && $user->isNot($model);
    }

    public function deleteAny(User $user): bool
    {
        return $user->isAdminDesa() || $user->isTechade();
    }
}
