// app/allproduct.js
"use server";

import { cookies } from "next/headers";
import Product from "../component/card";

export default async function UnappProducts({ searchpara }) {
  // Retrieve token from cookies
  const { faculty, category, time, price } = searchpara;
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;
  console.log(faculty);
  // If there's no token, return an error message
  if (!token) {
    return <p className="text-red-500">Unauthorized: No token found.</p>;
  }

  const tags = [faculty, category].join(",");
  let qurr;
  if (time) {
    qurr = `?tag=${tags}&createtime:${time}&page=1`;
  } else if (price) {
    qurr = `?tag=${tags}&price:${price}&page=1`;
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
      <div className="flex-grow flex items-center justify-center mt-10">
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
