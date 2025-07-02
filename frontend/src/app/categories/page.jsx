"use client"
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { axiosClient } from "../axios";
import Link from "next/link";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-6 text-right rtl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        تصفح الفئات
      </h1>

      {/* تصميم الشبكة (Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <CategoryCard image={category.image} name={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
