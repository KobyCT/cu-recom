// app/allproduct.js
"use server";

import { cookies } from "next/headers";
import Product from "../component/card";

export default async function UnappProducts() {
  // Retrieve token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;

  // If there's no token, return an error message
  if (!token) {
    return <p className="text-red-500">Unauthorized: No token found.</p>;
  }

  // Fetch product data
  const getProduct = async () => {
    try {
      const res = await fetch(
        "https://backend-cu-recom.up.railway.app/api/products?sort=createtime:DESC",
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
      console.error("Failed to fetch products:", error);
      return [];
    }
  };

  const data = await getProduct();

  // If no products, show a message
  if (data.length === 0) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <p className="text-gray-500">No products available.</p>
      </div>
    );
  }

  return (
    <div className="p-4 grid gap-4">
      {data.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          product_name={product.name}
          imageSrc={product.image || "/ph.jpg"}
          seller={product.sellerid}
          price={product.price}
          tag={["None"]}
        />
      ))}
    </div>
  );
}
