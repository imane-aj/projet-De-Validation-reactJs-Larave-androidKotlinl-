<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Stagiare::factory(10)->create();

        // \App\Models\Stagiare::factory(10)->create([
        //     'name' =>  fake()->name(),
        //     'lastName' => fake()->name(),
        // ]);
    }
}
