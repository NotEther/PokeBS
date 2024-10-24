<?php

use App\Http\Controllers\BattleController;

Route::post('/battle/start', [BattleController::class, 'startBattle']);
Route::get('/pokemon/{id}', [BattleController::class, 'getPokemon']);
Route::post('/battle/move', [BattleController::class, 'performMove']);
