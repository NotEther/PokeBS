<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BattleController extends Controller
{
    public function index()
    {
        // Return the Inertia response to render battlemenu.jsx
        return Inertia::render('Battle/BattleMenu');
    }
}

