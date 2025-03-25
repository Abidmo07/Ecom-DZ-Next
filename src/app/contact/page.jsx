"use client";
import React from "react";

export default function ContactUs() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 text-right" dir="rtl">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">تواصل معنا</h1>

            <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
                {/* Contact Form */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">أرسل لنا رسالة</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="اسمك الكامل"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="البريد الإلكتروني"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <textarea
                            placeholder="رسالتك"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            إرسال
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 text-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-800">معلومات الاتصال</h2>
                    <p>📍 <strong>العنوان:</strong> سطيف، وسط المدينة، الجزائر</p>
                    <p>📞 <strong>الهاتف:</strong></p>
                    <p><strong>📱 رمزي عبيد:</strong> <span className="ltr inline-block">222 027 541 213+   </span></p>
                    <p><strong>📱 زكريا كبايلي:</strong> <span className="ltr inline-block">510 382 669 213+   </span></p>

                    <p>📧 <strong>البريد الإلكتروني:</strong> <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a></p>
                    <p>⏰ <strong>ساعات العمل:</strong> الأحد - الخميس | 9 صباحًا - 6 مساءً</p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 justify-end">
                        <a href="#" className="text-blue-600 hover:underline">📘 فيسبوك</a>
                        <a href="#" className="text-blue-600 hover:underline">📷 إنستغرام</a>
                        <a href="#" className="text-blue-600 hover:underline">🐦 تويتر</a>
                    </div>

                    {/* Google Maps Link */}
                    <div className="mt-4">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Sétif+Centre+Ville"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 underline hover:text-blue-800"
                        >
                            📍 شاهد موقعنا على خرائط جوجل
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
