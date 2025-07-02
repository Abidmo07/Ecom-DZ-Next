<?php

namespace App\Http\Controllers;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(){
        $products = Product::orderBy("id","desc")->get();
        return response()->json([
            "All products"=> $products
        ]);
    }
    public function show( $product_id){
       $product = Product::find($product_id);
        return response()->json([
            "product"=> $product
        ]);
    }
}
