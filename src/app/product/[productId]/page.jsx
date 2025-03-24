"use client";
import { axiosClient } from '@/app/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function ProductPage() {
    const {productId}=useParams();
    const [product,setProduct]=useState({});
    const [wilayas,setWilayas]=useState([]);
    const [selectedWilaya,setSelectedWilaya]=useState({});
    const [quantity,setQuantity]=useState();
    const fetchProductInfos=async()=>{
        await axiosClient.get(`/product/${productId}`).then((response)=>{
            console.log(response.data.product);
            setProduct(response.data.product);
        }).catch((error)=>console.error(error))

    }
    const fetchWilayas=async()=>{
       await axiosClient.get('/wilayas').then((response)=>{
        setWilayas(response.data);
        console.log(response.data)
       }).catch((error)=>console.error(error))
    }
    const calculateTotalPrice=(product_price,delivery_price,quan=1)=>{
      return (
        (Number(product_price)*Number(quan))+Number(delivery_price)
      )

    }

    useEffect(()=>{
        
       fetchProductInfos();
       fetchWilayas();
      
    },[productId])
   
  return (
    <div className="max-w-5xl mx-auto p-6 text-right" dir="rtl">
    {/* Product Section */}
    <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">
            {product.description}
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-4">
            {product.price} دج
          </h2>
          <p className="text-sm text-gray-500">المخزون المتبقي: 200</p>
        </div>
      </div>

      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${product.image}`} // Replace dynamically
          alt="حذاء CR7"
          className="w-xl object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Order Form */}
    <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        قم بإتمام الطلب
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="اسمك الكامل"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
   
        <select onChange={(e)=>{
          const selected=wilayas.find(w=>w.name===e.target.value)
           setSelectedWilaya(selected)
        }} className='w-full p-3 border border-gray-300 rounded-lg' name="wilayas">
          <option value="ولايتك">ولايتك</option>
          {wilayas.map((wilaya)=>{
            return(
              <option   key={wilaya.id} value={wilaya.name}>{wilaya.name}</option>
            )
          })}

        </select>
        <input
          type='tel'
          placeholder="رقم الهاتف"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <textarea
          placeholder="عنوان التوصيل"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        ></textarea>
        <input type="number" name="quantity"
        placeholder='الكمية'
        className="w-full p-3 border border-gray-300 rounded-lg"
        value={quantity || 1}
        onChange={(e)=>{
         setQuantity(e.target.value)
        }}
        
        />
        <div className="text-lg font-semibold text-gray-900">
          سعر التوصيل: {selectedWilaya?.delivery_price ||0} دج
        </div>

        {/* Total Price */}
        <div className="text-lg font-semibold text-gray-900">
          السعر الإجمالي: {calculateTotalPrice(product.price,selectedWilaya?.delivery_price||0,quantity)} دج
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          تأكيد الطلب
        </button>
      </form>
    </div>
  </div>
  )
}
