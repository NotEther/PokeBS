<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BattleController extends Controller
{
    public function generateBattle(Request $request)
    {
    // Retrieve the battle type from the request
        $battleType = $request->input('battleType', 'Random Battle'); // Default to "Random Battle"

    // Generate a unique battle ID
        $battleId = Str::random(8);

    // Save the battle details to the database here
        return redirect()->route('battle.show', ['battleId' => $battleId])->with('battleType', $battleType);
    }

    public function showBattle($battleId)
    {
    // Retrieve the battle type from the session
        $battleType = session('battleType', 'Random Battle'); // Default if not set

        return view('battle.show', compact('battleId', 'battleType'));
    }

    public function index()
    {
        // Return the Inertia response to render battlemenu.jsx
        return Inertia::render('Battle/BattleMenu');
    }
}

