// app/allproduct.js
"use server";

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

  const data = await user();
  console.log(data);

  return (
    <div className="flex items-center mt-10 p-6 border-b border-gray-200 bg-white shadow-sm">
      <div className={`w-20 h-20 rounded-full bg${data.data.color}`}></div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold">{data.data.firstnameth}</h2>
        <p className="text-gray-400">{data.data.studentid}</p>
      </div>
    </div>
  );
}
