<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BattleController extends Controller
{
    //
    public function startBattle(Request $request)
{
    $pokemon1 = $request->input('pokemon1');
    $pokemon2 = $request->input('pokemon2');

    // Fetch Pokémon stats from database (you will need to create a model for Pokemon)
    $p1 = Pokemon::find($pokemon1);
    $p2 = Pokemon::find($pokemon2);

    // Initialize a new battle instance (you can create a Battle model to store battle data)
    $battle = Battle::create([
        'pokemon1' => $p1->name,
        'pokemon2' => $p2->name,
        'status' => 'ongoing'
    ]);
 
    return response()->json([
        'message' => 'Battle started!',
        'battle' => $battle,
        'pokemon1' => $p1,
        'pokemon2' => $p2
    ]);
}

}
