"use client";

import { useState } from "react";
import { Heart, ShoppingBag, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/app/component/header";
import PhotoSlider from "@/app/component/photoslider";
import Tag from "@/app/component/tag";

export default function ProductPage({
  product_name = "",
  price = "",
  seller = "",
  tags = [],
}) {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <Header Title={product_name} />

      {/* Main content */}
      <div className="flex-1 overflow-auto mt-16">
        <div className="relative">
          <PhotoSlider />
          <button
            className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md"
            onClick={() => setIsFavorited(!isFavorited)}
          ></button>
        </div>

        {/* Product Details */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">{product_name}</h2>
              <p className="text-gray-500 mt-1">{seller}</p>
            </div>
            <div className="text-2xl font-bold">{price}</div>
          </div>

          <div className="flex gap-2 mt-4">
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>

          <p className="mt-4 text-lg">
            ส่งต่อโต๊ะดราฟมือสอง ไฟยังติดอยู่ ขาตั้งมีรอยคลอก
            ด้วปรับพื้อเล็กน้อยแต่ยังใช้การได้ดี
          </p>
        </div>
      </div>
    </div>
  );
}
