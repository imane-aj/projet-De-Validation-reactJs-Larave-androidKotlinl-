<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\StagiaireController;
use App\Models\Stagiare;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('stagiaire/{name}', [StagiaireController::class, 'show']);
Route::get('stagiaire', [StagiaireController::class, 'index']);
Route::post('favorite', [FavoriteController::class, 'store']);
Route::get('favorite', [FavoriteController::class, 'index']);
Route::delete('favorite/{id}',  [FavoriteController::class, 'destroy']);
