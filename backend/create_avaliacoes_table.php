<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('avaliacoes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('prato_id')->constrained()->onDelete('cascade');
            $table->integer('nota')->comment('Avaliação de 1 a 5');
            $table->text('comentario')->nullable();
            $table->timestamps();
            
            // Garante que um usuário só pode avaliar um prato uma vez
            $table->unique(['user_id', 'prato_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avaliacoes');
    }
}; 