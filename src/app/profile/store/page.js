"use client";
import { useState } from "react";
import Image from "next/image";
import { Home, Store, PlusCircle, MessageCircle, User } from "lucide-react";
import NavItem from "@/app/component/Navbar";
import Product from "@/app/component/card";
import HeaderSearchLess from "@/app/component/headerns";

const itemsForSale = [
  {
    id: 1,
    title: "Physics 2nd Edition",
    seller: "Somsak Sookjai",
    price: "150฿",
    tag: ["คณะวิทยาศาสตร์"],
    image: "/ph.jpg",
  },
  {
    id: 2,
    title: "หนังสือชีวะ:ปลาหมึก สภาพดี",
    seller: "Dorothy Perkins",
    price: "170฿",
    tag: ["คณะวิทยาศาสตร์"],
    image: "/ph.jpg",
  },
];

const pendingItems = [
  {
    id: 3,
    title: "Physics 2nd Edition",
    seller: "Somsak Sookjai",
    price: "150฿",
    tag: ["คณะวิทยาศาสตร์"],
    image: "/ph.jpg",
  },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <HeaderSearchLess Title="ร้านค้าของฉัน" />

      <div className="p-4 mt-20">
        <Section title="ลงขายแล้ว" items={itemsForSale} />
        <Section title="รอการยืนยัน" items={pendingItems} />
      </div>

      <NavItem profile={true} />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow flex items-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.seller}</p>
              {item.tag.map((tag, index) => (
                <div className="bg-pink-500 text-white rounded-full px-2 py-1 w-max mt-2 text-center">
                  <p className="text-white text-sm mt-1">{tag}</p>
                </div>
              ))}
              <p className="font-bold mt-1">{item.price}</p>
            </div>
            <button className="text-gray-400">✖</button>
          </div>
        ))}
      </div>
    </div>
  );
}
