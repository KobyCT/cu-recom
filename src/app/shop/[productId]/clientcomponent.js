"use client";

import { useState, useEffect } from "react";
import { Heart, ShoppingBag, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/app/component/header";

import NavItem from "@/app/component/Navbar";

export default function ProductPage({ children }) {
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  // Extract product data from the API response

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <Header Title="สินค้า" />

      {/* Main content */}
      {clientReady ? (
        children
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* Spinner Animation */}
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mt-8"></div>
          <p className="text-gray-500 mt-4">กำลังโหลด...</p>
        </div>
      )}

      {/* Footer with action buttons */}
      <div className="sticky bottom-0 bg-white shadow-md p-4">
        <NavItem />
      </div>
    </div>
  );
}
