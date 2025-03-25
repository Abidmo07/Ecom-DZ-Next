import React from 'react'
export default function CategoryCard({image,name}) {
  return (
<div  className="py-5 cursor-pointer">
  <div className="relative bg-white w-44 rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeIn">
    <img 
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`} 
      alt={name} 
      className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
    />
   
    <div className="p-3 text-center">
      <p className="text-lg font-semibold text-gray-800">{name}</p>
    </div>
  </div>
</div>


  
  )
}
