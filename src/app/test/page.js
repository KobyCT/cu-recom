"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getCookie } from "cookies-next";
export default function ProductPage({ searchParams }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const { id } = await searchParams;
      console.log(id);
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://backend-cu-recom.up.railway.app/api/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProduct(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [searchParams, router]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
