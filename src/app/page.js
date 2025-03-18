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
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white tracking-wide">RazaShop</h1>
        <div className="space-x-6">
          <Link href="/" className="text-white font-medium hover:text-gray-200 transition duration-300">Home</Link>
          <Link href="/about" className="text-white font-medium hover:text-gray-200 transition duration-300">About</Link>
          <Link href="/contact" className="text-white font-medium hover:text-gray-200 transition duration-300">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-100 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Discover Our Latest Collection</h2>
        <p className="mt-3 text-lg text-gray-600">Shop high-quality products at the best prices!</p>
      </header>

      {/* Product Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Collection</h2>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p className="text-sm">&copy; 2025 Raza Shop. All rights reserved.</p>
      </footer>
    </>
  );
}
