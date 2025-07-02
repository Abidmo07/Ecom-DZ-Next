<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/product',[ProductController::class,'index'])->name('product.index');
Route::get('/product/{id}',[ProductController::class,'show'])->name('product.show');
Route::post('/order',[OrderController::class,'store'])->name('order.store');
Route::get('/order/{id}',[OrderController::class,'getSpecificOrder'])->name('order.getspecific');
Route::get( '/wilayas',[OrderController::class,'getAllWilayas'])->name('order.wilayas');
Route::get('/categories',[CategoryController::class,'categories'])->name('category.all');
Route::get( '/categories/{id}',[CategoryController::class,'productBycategory'])->name('category.products');
