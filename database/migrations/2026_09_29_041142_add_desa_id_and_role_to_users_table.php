<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('desa_id')->nullable()->after('email')->constrained()->nullOnDelete();
            $table->enum('role', ['dinas', 'admin_desa', 'editor'])->default('editor')->after('desa_id');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['desa_id']);
            $table->dropColumn(['desa_id', 'role']);
        });
    }
};
