<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        "name","description",
        "price","stock",
        "image","category_id","vendor_id"
    ] ;

    protected static function boot()
    {
        parent::boot();

        // Automatically assign the vendor_id during product creation
        static::creating(function ($product) {
            // Ensure the user is authenticated before assigning the vendor_id
            if (auth()->check()) {
                $product->vendor_id = auth()->id(); // This will set the authenticated user's ID
            }
        });
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function order(){
        return $this->belongsTo(Order::class);
    }
    public function orderItems(){
      return $this->hasMany(OrderItem::class);
    }
    public function vendor(){
        return $this->belongsTo(User::class);
    }
}
