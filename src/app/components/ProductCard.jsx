import Link from 'next/link'
import React from 'react'

export default function ProductCard({image,name,price}) {
  return (
   <>
  <div className="flex flex-col w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-3">
  {/* Product Image */}
  <img 
    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
    alt="product image" 
    className="w-full h-48 object-cover"
  />

  {/* Product Details */}
  <div className="p-4 flex flex-col gap-2 ">
    {/* Product Name */}
    <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>

    {/* Product Price */}
    <h3 className="text-lg font-bold text-gray-900 text-center">{price} DZD</h3>

    {/* Order Button */}
    <button
      type="button" 
      className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
    >
      Order Now
    </button>
  </div>
</div>
   </>
  )
}
