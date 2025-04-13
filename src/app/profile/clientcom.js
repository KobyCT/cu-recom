// app/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeaderSearchLess from "../component/headerns";
import NavItem from "../component/Navbar";
import Link from "next/link";
import Image from "next/image";
export default function ProfilePage({ children }) {
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <HeaderSearchLess Title="บัญชี" />
      </div>

      {/* Profile Card */}
      {clientReady ? (
        children
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* Spinner Animation */}
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mt-8"></div>
          <p className="text-gray-500 mt-4">กำลังโหลด...</p>
        </div>
      )}

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
      <div className="mt-2 bg-white shadow-sm ">
        <h1 className="p-4 flex items-center border-b border-gray-100">ติดต่อเราได้ที่ IG:@cu_recommerce</h1>
        <div className="flex items-center">
        <Image src="/nibba.jpg" alt="Instagram Contact" width={200} height={200} className="p-4" /></div>
      </div>

      {/* Empty Space */}
      <div className="flex-grow"></div>
      

      {/* Bottom Navigation */}
      <NavItem profile={true} />
    </div>
  );
}
