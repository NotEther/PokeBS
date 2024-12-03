<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TeamBuilderController extends Controller
{
    public function index()
    {
        return Inertia::render('Teambuilder/TeamBuilder', [
        ]);
    }
}
