"use client";
import { Dialog } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavItem from "@/app/component/Navbar";

const categories = [
  "เครื่องแต่งกาย",
  "อุปกรณ์เครื่องใช้ขนาดเล็ก",
  "อุปกรณ์เครื่องใช้ขนาดใหญ่",
  "หนังสือและเอกสารการเรียน",
  "เครื่องเขียนและอุปกรณ์ศิลปะ",
];

export default function MainLayout({ children }) {
  const [search, setSearch] = useState("");
  const [clientReady, setClientReady] = useState(false);
  const router = useRouter();

  // Set client as ready after first render
  useEffect(() => {
    setClientReady(true);
  }, []);

  // Debounce search query updates
  useEffect(() => {
    if (search.trim()) {
      const delay = setTimeout(() => {
        router.push(`/shop/search?q=${encodeURIComponent(search)}`);
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [search]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Top Navigation */}
      <nav className="p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50">
        <button onClick={() => router.back()} className="text-2xl">
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
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">ค้นหาสินค้า</h1>
        <div>
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
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </nav>

      {/* Filter Navigation with Search Bar */}
      <nav className="p-4 flex items-center fixed top-12 left-0 w-full bg-white shadow-md z-40">
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ค้นหาสินค้า..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value.trim() === "" ? "" : e.target.value)
          }
        />
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col pt-24 pb-16 mt-10">
        <div className="flex-grow">
          {clientReady ? (
            children
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center">
              {/* Spinner Animation */}
              <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mt-8"></div>
              <p className="text-gray-500 mt-4">กำลังโหลด...</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavItem shop={true} className="fixed bottom-0 left-0 w-full" />
    </div>
  );
}
