// app/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderSearchLess from "../component/headerns";
import NavItem from "../component/Navbar";
import Link from "next/link";
const user = {
  name: "Zatin Thachalad",
  phone: "674*******",
  color: "pink-400",
};

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <HeaderSearchLess Title="บัญชี" />
      </div>

      {/* Profile Card */}
      <div className="flex items-center mt-10 p-6 border-b border-gray-200 bg-white shadow-sm">
        <div className={`w-20 h-20 rounded-full bg-${user.color}`}></div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-400">{user.phone}</p>
        </div>
      </div>

      {/* Store Section */}
      <div className="mt-2 bg-white shadow-sm hover:bg-gray-50">
        <Link
          href="/profile/store"
          className="p-4 flex items-center border-b border-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M3 9l2-2h14l2 2v10H3V9z" />
            <path d="M3 9h18" />
            <path d="M7 13h.01" />
            <path d="M12 13h.01" />
            <path d="M17 13h.01" />
          </svg>
          <span className="text-lg font-bold">ร้านค้าของฉัน</span>
        </Link>
      </div>

      {/* Order Status */}
      <Link
        href=""
        className="p-4 border-b border-gray-100 bg-white shadow-sm mt-2 hover:bg-gray-50"
      >
        <h3 className="text-lg font-bold mb-1">การสั่งซื้อของฉัน</h3>
        <p className="text-gray-400">อยู่ระหว่างการดำเนินการ 3 ออเดอร์</p>
      </Link>

      {/* Empty Space */}
      <div className="flex-grow"></div>

      {/* Bottom Navigation */}
      <NavItem profile={true} />
    </div>
  );
}
