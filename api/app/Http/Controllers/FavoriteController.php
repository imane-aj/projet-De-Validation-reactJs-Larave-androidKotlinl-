<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $fav = Favorite::all();
        return $fav;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $fav = Favorite::create([
            'strMealThumb' => $request->strMealThumb,
            'strMeal' => $request->strMeal,
            'strYoutube' => $request->strYoutube,
            'strIngredient1'=> $request->strIngredient1,
            'strIngredient2'=> $request->strIngredient2,
            'strIngredient3'=> $request->strIngredient3,
            'strIngredient4'=> $request->strIngredient4,
            'strIngredient5'=> $request->strIngredient5,
            'strIngredient6'=> $request->strIngredient6,
            'strIngredient7'=> $request->strIngredient7,
            'strIngredient8'=> $request->strIngredient8,
            'strIngredient9'=> $request->strIngredient9,
            'strIngredient10'=> $request->strIngredient10,
            'strIngredient11'=> $request->strIngredient11,
            'strIngredient12'=> $request->strIngredient12,
            'strIngredient13'=> $request->strIngredient13,
            'strIngredient14'=> $request->strIngredient14,
            'strIngredient15'=> $request->strIngredient15,
            'strIngredient16'=> $request->strIngredient16,
            'strIngredient17'=> $request->strIngredient17,
            'strIngredient18'=> $request->strIngredient18,
            'strIngredient19'=> $request->strIngredient19,
            'strIngredient20'=> $request->strIngredient20,
        ]);
        return $fav;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $fav = Favorite::findOrFail($id);
        return $fav->delete();
    }
}
