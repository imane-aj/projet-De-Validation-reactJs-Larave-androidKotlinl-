<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->string('strMealThumb');
            $table->string('strMeal');
            $table->string('strYoutube');
            $table->string('strIngredient1')->nullable();
            $table->string('strIngredient2')->nullable();
            $table->string('strIngredient3')->nullable();
            $table->string('strIngredient4')->nullable();
            $table->string('strIngredient5')->nullable();
            $table->string('strIngredient6')->nullable();
            $table->string('strIngredient7')->nullable();
            $table->string('strIngredient8')->nullable();
            $table->string('strIngredient9')->nullable();
            $table->string('strIngredient10')->nullable();
            $table->string('strIngredient11')->nullable();
            $table->string('strIngredient12')->nullable();
            $table->string('strIngredient13')->nullable();
            $table->string('strIngredient14')->nullable();
            $table->string('strIngredient15')->nullable();
            $table->string('strIngredient16')->nullable();
            $table->string('strIngredient17')->nullable();
            $table->string('strIngredient18')->nullable();
            $table->string('strIngredient19')->nullable();
            $table->string('strIngredient20')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorites');
    }
};
