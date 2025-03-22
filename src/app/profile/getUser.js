// app/allproduct.js
"use server";
"no cache";

import { cookies } from "next/headers";

export default async function UserBanner() {
  // Retrieve token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;

  // If there's no token, return an error message
  if (!token) {
    return <p className="text-red-500">Unauthorized: No token found.</p>;
  }

  // Fetch product data
  const user = async () => {
    try {
      const res = await fetch(
        "https://backend-cu-recom.up.railway.app/api/auth/me",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store", // Ensure fresh data on each request
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return [];
    }
  };

  const chat = async (uid) => {
    try {
      const res = await fetch(
        `https://backend-cu-recom.up.railway.app/api/chats/${uid}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store", // Ensure fresh data on each request
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return [];
    }
  };

  const data = await user();
  const chatofuser = await chat(data.data.uid);
  console.log(data);
  console.log(chatofuser);
  return (
    <div>
      <div className="flex items-center mt-10 p-6 border-b border-gray-200 bg-white shadow-sm">
        <div
          className="w-20 h-20 rounded-full"
          style={{ backgroundColor: data.data.color }}
        ></div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold">
            {data.data.firstnameth + " " + data.data.lastnameth}
          </h2>
          <p className="text-gray-400">{data.data.studentid}</p>
        </div>
      </div>

      <div className="p-4 border-b border-gray-100 bg-white shadow-sm mt-2 hover:bg-gray-50 mt-5">
        <h3 className="text-lg font-bold mb-1">การซื้อ-ขายของฉัน</h3>
        <p className="text-gray-400">
          อยู่ระหว่างการดำเนินการ {chatofuser.length} รายการ
        </p>
      </div>
    </div>
  );
}
