"use client";

import { useState, useEffect } from "react";
import { Heart, ShoppingBag, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/app/component/header";
import NavItem from "@/app/component/Navbar";
import { deleteProduct } from "./delete";
import { getCookie } from "cookies-next";

const handleDelete = async (productId) => {
  if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?")) return;
  const token = getCookie("token");
  const response = await deleteProduct(productId, token);

  if (response.success) {
    alert("สินค้าถูกลบเรียบร้อยแล้ว!");
    window.location.href = "/shop"; // Redirect after deletion
  } else {
    alert("เกิดข้อผิดพลาดในการลบสินค้า: " + response.error);
  }
};

const checkId = async (id) => {
  const token = getCookie("token");
  try {
    const res = await fetch(
      "https://backend-cu-recom.up.railway.app/api/auth/me",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );
    const sellerRes = await fetch(
      `https://backend-cu-recom.up.railway.app/api/products/${id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!res.ok || !sellerRes.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const userData = await res.json();
    const sellerData = await sellerRes.json();
    return userData.data.uid == sellerData.data[0].sellerid;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return false;
  }
};

export default function ProductPage({ children, params }) {
  const [clientReady, setClientReady] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    setClientReady(true);

    // Fetch and update seller status
    checkId(params).then((result) => {
      setIsSeller(result);
    });
  }, [params]);
  console.log(isSeller);
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

      {/* Show Delete Button Only if User is Seller */}
      {isSeller && (
        <button
          className="fixed bottom-20 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
          onClick={() => handleDelete(params)}
        >
          ลบสินค้า
        </button>
      )}

      {/* Footer with action buttons */}
      <div className="sticky bottom-0 bg-white shadow-md p-4">
        <NavItem />
      </div>
    </div>
  );
}
