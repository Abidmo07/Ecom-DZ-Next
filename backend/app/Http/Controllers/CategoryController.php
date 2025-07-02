<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

class CategoryController extends Controller
{
    public function categories(){
        $categories = Category::all();
        return response()->json($categories);
    }
    public function productBycategory($id){
        $products = Product::where("category_id",$id)->get();
        return response()->json($products);
    }
}
