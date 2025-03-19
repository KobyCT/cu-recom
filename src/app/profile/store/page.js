"use client";

import NavItem from "@/app/component/Navbar";
import HeaderSearchLess from "@/app/component/headerns";
import UnappProducts from "./server";
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
        <Section title="รอการยืนยัน" type="/approve" />
      </div>

      <NavItem profile={true} />
    </div>
  );
}

function Section({ title, type }) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <div className="space-y-4">
        <UnappProducts app={type} />
      </div>
    </div>
  );
}
