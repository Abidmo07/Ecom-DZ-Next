"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { axiosClient } from "./axios";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get("/product");
        console.log(response.data);
        setProducts(response.data["All products"]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
     

      {/* Hero Section */}
      <header className="bg-blue-100 py-16 text-center" dir="rtl">
  <h2 className="text-4xl font-extrabold text-gray-800">اكتشف أحدث مجموعاتنا</h2>
  <p className="mt-3 text-lg text-gray-600">تسوق منتجات عالية الجودة بأفضل الأسعار!</p>
</header>


      {/* Product Section */}
      <div className="container mx-auto px-6 py-12 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">مجموعتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`product/${product.id}`} key={product.id}>
              <ProductCard 
              
              image={product.image}
              name={product.name}
              price={product.price}
            />
            </Link>
          
          ))}
        </div>
      </div>

     
    </>
  );
}
