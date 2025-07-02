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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('custommer_name');
            $table->string('custommer_wilayas');
            $table->string('custommer_phone');
            $table->string('custommer_address');
            $table->decimal(    'total_price',10,2);
            $table->integer('quantity');
            $table->enum('status', ['pending','confirmed','delivered','canceled'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
