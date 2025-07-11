"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { axiosClient } from "./axios";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState({
    products: true,
    categories: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axiosClient.get("/product");
        setProducts(productsResponse.data["All products"] || []);

        // Fetch categories
        const categoriesResponse = await axiosClient.get("/categories");
        setCategories(categoriesResponse.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading({ products: false, categories: false });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50" dir="rtl">
      {/* Modern Products Showcase */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900">أحدث المنتجات</h2>
              <p className="text-gray-600 mt-2">اكتشف مجموعتنا المميزة من المنتجات</p>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              عرض الكل
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          {isLoading.products ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  nextEl: '.products-next',
                  prevEl: '.products-prev',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="py-4"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Link href={`/product/${product.id}`} passHref>
                        <ProductCard
                          image={product.image}
                          name={product.name}
                          price={product.price}
                        />
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="products-prev absolute top-1/2 -right-4 z-10 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="products-next absolute top-1/2 -left-4 z-10 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section with Glass Morphism */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">تصفح حسب الفئة</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {isLoading.categories ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white/50 backdrop-blur-sm rounded-2xl h-48 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                navigation={{
                  nextEl: '.categories-next',
                  prevEl: '.categories-prev',
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="py-4"
              >
                {categories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Link href={`/categories/${category.id}`} passHref>
                        <CategoryCard
                          image={category.image}
                          name={category.name}
                        />
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="categories-prev absolute top-1/2 -right-4 z-10 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="categories-next absolute top-1/2 -left-4 z-10 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">جاهز لاكتشاف المزيد؟</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                سجل حسابك الآن واحصل على خصم 10% على أول طلبية لك
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/register">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                    إنشاء حساب
                  </button>
                </Link>
                <Link href="/products">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                    تصفح المنتجات
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}