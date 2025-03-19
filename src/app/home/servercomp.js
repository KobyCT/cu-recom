"use server";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
function ProductCard({
  isNew = true,
  pic = "/ph.jpg",
  altText = "Product item",
  id,
}) {
  return (
    <Link
      href={`shop/${id}`}
      className="relative min-w-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 group"
    >
      <div className="relative h-40 w-full">
        {isNew && (
          <div className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded z-10 text-xs">
            NEW
          </div>
        )}
        <Image src={pic} alt={altText} fill className="object-cover" />
      </div>

      {/* Tooltip (Pure CSS) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {altText}
      </div>
    </Link>
  );
}

export default async function Show() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value || "";

  // If there's no token, return an error message
  if (!token) {
    return (
      <p className="text-red-500">
        Unauthorized: No token found. Please come back by CUNEX app
      </p>
    );
  }

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
  console.log(data);
  return (
    <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          pic={product.productImageUrls[0]}
          altText={product.name}
          id={product.id}
        />
      ))}
    </div>
  );
}
