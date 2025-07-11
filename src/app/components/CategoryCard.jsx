import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryCard({ image, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="relative group cursor-pointer w-56 h-64"
    >
      {/* Card container with glass morphism effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* Image with parallax effect */}
        <motion.img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Category name */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-center">
          <motion.h3 
            className="text-2xl font-bold text-white drop-shadow-lg"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.h3>
          
          {/* Animated underline */}
          <motion.div 
            className="h-0.5 bg-white mt-2 mx-auto w-0 group-hover:w-16 transition-all duration-500"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ delay: 0.3 }}
          />
        </div>
        
        {/* Floating circle accent */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}