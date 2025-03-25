"use client";
import { axiosClient } from "@/app/axios";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const fetchProductsByCategory = async () => {
    try {
      const response = await axiosClient.get(`/categories/${categoryId}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  return (
    <div className="p-6 text-right rtl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        المنتجات المتاحة
      </h1>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
