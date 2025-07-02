<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use App\Models\Wilaya;
use App\Notifications\NewOrderNotification;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function getAllWilayas(){
        $wilayas=Wilaya::all();
        return response()->json($wilayas);
    }
    public function store(Request $request){
      $orderInfo=$request->validate([
        "custommer_name"=> ["required","string","max:255"],
        "custommer_wilayas"=> ["required","string","max:255"],
        "custommer_phone"=> ["required","string","min:10"],
        "custommer_address"=> ["required","string",],
        "status"=>["required","string"],
        "product_id"=>["required","exists:products,id"],
        "quantity"=>["required","integer"],
        "total_price"=> ["required"],
      ]);

        $order=Order::create($orderInfo);

      $product=Product::find($orderInfo["product_id"]);
      $vendor_id=$product->vendor_id;

      $orderItem=OrderItem::create([
      "order_id"=> $order->id,
      "product_id"=>$product->id,
      "vendor_id"=>$vendor_id,
      "quantity"=>$orderInfo["quantity"],
      "price_at_purchase"=>$product->price
    ]);
    $vendor=User::find($vendor_id);
    if($vendor){
        $vendor->notify(new NewOrderNotification($orderItem));
    }

    return response()->json([
        "message"=>"Order placed successfully!",
        "order"=> $order,
        "orderItem"=> $orderItem
    ] );



    }

    public function getSpecificOrder($orderId){
        $order=Order::find($orderId);
        $orderItem=OrderItem::find($orderId);
        $product=Product::find($orderItem->product_id);
        $product_price=$orderItem->price_at_purchase;
        $quantity= $orderItem->quantity;
        $product_price= $product_price*$quantity;
        $dilevery_price=Wilaya::where("name",$order->custommer_wilayas)->first()->delivery_price;

        return response()->json([
            "custommer_name"=>$order->custommer_name,
            "custommer_phone"=>$order->custommer_phone,
            "product_name"=>$product->name,
            "product_price"=>$product_price,
            "dilevery_price"=>$dilevery_price,
            "total"=>$order->total_price,
        ]);
    }

}
