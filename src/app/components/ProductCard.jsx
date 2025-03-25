import Link from "next/link";
import React from "react";

export default function ProductCard({ image, name, price }) {
  return (
    <div
      className="flex flex-col w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg
       hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 
       animate-fadeIn p-3"
    >
      {/* صورة المنتج */}
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
        alt="product image"
        className="w-full h-48 object-cover rounded-md"
      />

      {/* تفاصيل المنتج */}
      <div className="p-4 flex flex-col gap-2 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-lg font-bold text-gray-900">{price} DZD</h3>

        {/* زر الطلب */}
        <button
          type="button"
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md 
          hover:bg-blue-700 transition-colors duration-300 hover:scale-105"
        >
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
