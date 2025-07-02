"use client";
import { axiosClient } from "@/app/axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ThankYou() {
  const router = useRouter();
  const { orderId } = useParams();
  const [orderInfos, setOrderInfos] = useState({});

  useEffect(() => {
    const getOrderInfo = async () => {
      await axiosClient
        .get(`/order/${orderId}`)
        .then((response) => {
          console.log(response.data);
          setOrderInfos(response.data);
        })
        .catch((error) => console.error(error));
    };
    getOrderInfo();
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6" dir="rtl">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">✅</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">شكراً لطلبك!</h1>
        <p className="text-gray-600 mb-4">
          تم استلام طلبك بنجاح وسنتواصل معك قريباً لتأكيد التوصيل.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg text-right text-sm mb-4">
          <p>
            <span className="font-semibold">الاسم:</span> {orderInfos.custommer_name}
          </p>
          <p>
            <span className="font-semibold">رقم الهاتف:</span> {orderInfos.custommer_phone}
          </p>
          <p>
            <span className="font-semibold">المنتج:</span> {orderInfos.product_name}
          </p>
          <p>
            <span className="font-semibold">السعر:</span> {orderInfos.product_price} دج
          </p>
          <p>
            <span className="font-semibold">سعر التوصيل:</span> {orderInfos.dilevery_price} دج
          </p>
          <p className="mt-2 pt-2 border-t">
            <span className="font-semibold">المجموع:</span> {orderInfos.total} دج
          </p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
        >
          الرجوع إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}
