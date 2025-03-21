"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getCookie } from "cookies-next";

const checkBuyer = async () => {
  const token = getCookie("token");
  try {
    // Fetch user data
    const userRes = await fetch(
      "https://backend-cu-recom.up.railway.app/api/auth/me",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!userRes.ok) {
      throw new Error(`HTTP error! Status: ${userRes.status}`);
    }

    const userData = await userRes.json();
    console.log(userData);
    const userId = userData.data.uid;

    // Fetch chat data
    const chatRes = await fetch(
      `https://backend-cu-recom.up.railway.app/api/chats/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!chatRes.ok) {
      throw new Error(`HTTP error! Status: ${chatRes.status}`);
    }

    const chatData = await chatRes.json();
    console.log("chatid: " + chatData);
    // Fetch product data
    const productRes = await fetch(
      `https://backend-cu-recom.up.railway.app/api/products/myproduct`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!productRes.ok) {
      throw new Error(`HTTP error! Status: ${productRes.status}`);
    }

    const productData = await productRes.json();

    // Extract all product IDs from my products
    const myProductIds = productData.map((product) => product.id);

    // Filter chats to get only those where productid is not in myProductIds
    const filteredChats = chatData.filter(
      (chat) => !myProductIds.includes(chat.productid)
    );
    console.log(filteredChats.length);
    // Return the length as a number (not as a function call)
    return filteredChats.length;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return 0; // Return 0 instead of false for consistency (length should be a number)
  }
};

export default function ProductPage({ searchParams }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkBuyer();
  }, [searchParams, router]);

  return <div>hi</div>;
}
