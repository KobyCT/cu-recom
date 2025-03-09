// app/page.tsx
'use client';

import { useState } from 'react';
import { Heart, ShoppingBag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/component/header';
export default function ProductPage() {
  const [isFavorited, setIsFavorited] = useState(false);
  
  return (
    <div className="flex flex-col h-screen bg-white">
      

      {/* Header */}
      <Header prevPage="/shop" Title="Product Detail" />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="relative">
          <Image 
            src="/ph.jpg" 
            alt="Drafting Table" 
            width={600} 
            height={600}
            className="w-full object-contain bg-gray-100"
          />
          <div className="absolute top-4 left-0">
            <div className="bg-red-500 text-white py-1 px-3 transform -rotate-45 translate-x-[-30%] font-bold text-sm">
              QUALITY FIRST
            </div>
          </div>
          <button 
            className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart size={24} fill={isFavorited ? "#f43f5e" : "none"} color={isFavorited ? "#f43f5e" : "#000"} />
          </button>
        </div>

        {/* Product Details */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">โต๊ะดราฟ Drafting Table</h2>
              <p className="text-gray-500 mt-1">Somsak Sookjai</p>
            </div>
            <div className="text-2xl font-bold">3,500฿</div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <div className="bg-pink-500 text-white rounded-full px-4 py-2">
              Architecture
            </div>
            <div className="bg-pink-500 text-white rounded-full px-4 py-2">
              Statioaries
            </div>
          </div>
          
          <p className="mt-4 text-lg">
            ส่งต่อโต๊ะดราฟมือสอง ไฟยังติดอยู่ ขาตั้งมีรอยคลอก ด้วปรับพื้อเล็กน้อยแต่ยังใช้การได้ดี
          </p>
        </div>
      </div>

      {/* Bottom Shopping Bar */}
      <div className="w-full bg-white py-4 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button className="w-full bg-pink-500 text-white rounded-full py-4 font-bold text-lg flex items-center justify-center">
          Add to Bag
        </button>
        <div className="h-6" />
      </div>

      {/* Shopping Bag Icon */}
      <div className="absolute bottom-24 right-6">
        <button className="bg-pink-500 text-white rounded-full p-4 shadow-lg">
          <ShoppingBag size={24} />
        </button>
      </div>
    </div>
  );
}