import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductCard({ image, name, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="relative group w-72 h-96 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
      
      {/* Product image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Product details */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 space-y-2 text-white">
        {/* Price tag */}
        <motion.div 
          className="absolute -top-12 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm">DZD</span> {price}
        </motion.div>

        {/* Product name */}
        <h3 className="text-2xl font-bold tracking-tight drop-shadow-md">
          {name}
        </h3>

        {/* CTA button with shine effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden mt-4"
        >
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg relative z-10">
            <span className="relative z-10">Order Now</span>
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 -translate-x-full group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>

      {/* Floating tags */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <span className="bg-white/90 text-xs font-semibold text-gray-900 px-2 py-1 rounded-full backdrop-blur-sm">
          New
        </span>
        <span className="bg-amber-400/90 text-xs font-semibold text-gray-900 px-2 py-1 rounded-full backdrop-blur-sm">
          Popular
        </span>
      </div>
    </motion.div>
  );
}