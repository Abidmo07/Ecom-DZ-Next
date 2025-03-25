"use client";
import { axiosClient } from "@/app/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [wilayas, setWilayas] = useState([]);
  const [selectedWilaya, setSelectedWilaya] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchProductInfos = async () => {
    try {
      const response = await axiosClient.get(`/product/${productId}`);
      setProduct(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWilayas = async () => {
    try {
      const response = await axiosClient.get("/wilayas");
      setWilayas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalPrice = (product_price, delivery_price, quan = 1) => {
    return Number(product_price) * Number(quan) + Number(delivery_price);
  };

  useEffect(() => {
    fetchProductInfos();
    fetchWilayas();
  }, [productId]);

  return (
    <div className="max-w-5xl mx-auto p-6 text-right" dir="rtl">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-6 animate-fadeIn">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${product.image}`}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg  shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <h2 className="text-2xl font-semibold text-blue-600 mt-4">
              {product.price} دج
            </h2>
            <p className="text-sm text-gray-500">المخزون المتبقي: 200</p>
          </div>
        </div>
      </div>

      {/* Order Form */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          قم بإتمام الطلب
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="اسمك الكامل"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            onChange={(e) => {
              const selected = wilayas.find((w) => w.name === e.target.value);
              setSelectedWilaya(selected);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            name="wilayas"
          >
            <option value="">اختر ولايتك</option>
            {wilayas.map((wilaya) => (
              <option key={wilaya.id} value={wilaya.name}>
                {wilaya.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            placeholder="رقم الهاتف"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            placeholder="عنوان التوصيل"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <input
            type="number"
            name="quantity"
            placeholder="الكمية"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <div className="text-lg font-semibold text-gray-900">
            سعر التوصيل: {selectedWilaya?.delivery_price || 0} دج
          </div>

          <div className="text-lg font-semibold text-gray-900">
            السعر الإجمالي:{" "}
            {calculateTotalPrice(
              product.price,
              selectedWilaya?.delivery_price || 0,
              quantity
            )}{" "}
            دج
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
          >
            تأكيد الطلب
          </button>
        </form>
      </div>
    </div>
  );
}
