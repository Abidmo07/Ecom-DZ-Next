"use client";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">من نحن؟</h1>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">رؤيتنا ورسالتنا</h2>
          <p className="text-gray-600 leading-relaxed">
            نحن فريق مكون من محترفين في التجارة الإلكترونية والتطوير، نقدم أفضل المنتجات والخدمات
            لعملائنا مع ضمان أعلى معايير الجودة والموثوقية.
          </p>
          <p className="text-gray-600 leading-relaxed">
            نسعى لتقديم تجربة تسوق متميزة وسلسة عبر الإنترنت، ونعمل باستمرار على تطوير خدماتنا
            لتلبية احتياجاتكم بأفضل طريقة ممكنة.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/about-us.jpg" // Ensure you have this image in the public folder
            alt="من نحن"
            className="w-full md:w-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">فريقنا</h2>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="flex flex-col items-center">
            <img src="/ramzi.jpg" alt="رمزي عبيد" className="w-24 h-24 rounded-full shadow-md" />
            <h3 className="text-lg font-semibold mt-2">رمزي عبيد</h3>
            <p className="text-gray-600 text-sm">شريك مؤسس ومسؤول العمليات</p>
            <p className="text-blue-600"><a href="tel:+213541027222"> 222 027 541 213+ </a></p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/zakaria.jpg" alt="زكريا كبايلي" className="w-24 h-24 rounded-full shadow-md" />
            <h3 className="text-lg font-semibold mt-2">زكريا كبايلي</h3>
            <p className="text-gray-600 text-sm">شريك مؤسس ومسؤول التسويق</p>
            <p className="text-blue-600"><a href="tel:+213669382510">510 382 669 213+ </a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
