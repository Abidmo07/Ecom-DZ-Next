<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        "custommer_name","custommer_wilayas","custommer_phone","custommer_address","total_price","status","quantity",
    ] ;

    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }

}
