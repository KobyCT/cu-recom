// app/allproduct.js
"use server";

import { cookies } from "next/headers";
import Product from "@/app/component/card";

export default async function UnappProducts({ app }) {
  // Retrieve token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;
  // If there's no token, return an error message
  if (!token) {
    return <p className="text-red-500">Unauthorized: No token found.</p>;
  }

  const facultyData = [
    { name: "สถาบันภาษาไทยสิรินธร", id: "01" },
    { name: "ศูนย์การศึกษาทั่วไป", id: "02" },
    { name: "บัณฑิตวิทยาลัย", id: "20" },
    { name: "คณะวิศวกรรมศาสตร์", id: "21" },
    { name: "คณะอักษรศาสตร์", id: "22" },
    { name: "คณะวิทยาศาสตร์", id: "23" },
    { name: "คณะรัฐศาสตร์", id: "24" },
    { name: "คณะสถาปัตยกรรมศาสตร์", id: "25" },
    { name: "คณะพาณิชยศาสตร์และการบัญชี", id: "26" },
    { name: "คณะศึกษาศาสตร์", id: "27" },
    { name: "คณะนิเทศศาสตร์", id: "28" },
    { name: "คณะเศรษฐศาสตร์", id: "29" },
    { name: "คณะแพทยศาสตร์", id: "30" },
    { name: "คณะสัตวแพทยศาสตร์", id: "31" },
    { name: "คณะทันตแพทยศาสตร์", id: "32" },
    { name: "คณะเภสัชศาสตร์", id: "33" },
    { name: "คณะนิติศาสตร์", id: "34" },
    { name: "คณะศิลปกรรมศาสตร์", id: "35" },
    { name: "คณะพยาบาลศาสตร์", id: "36" },
    { name: "คณะสหเวชศาสตร์", id: "37" },
    { name: "คณะจิตวิทยา", id: "38" },
    { name: "คณะวิทยาศาสตร์การกีฬา", id: "39" },
    { name: "โรงเรียนทรัพยากรเกษตร", id: "40" },
    { name: "วิทยาลัยประชากรศาสตร์", id: "51" },
    { name: "วิทยาลัยวิทยาศาสตร์สาธารณสุข", id: "53" },
    { name: "สถาบันภาษา", id: "55" },
    { name: "สถาบันนวัตกรรมบูรณาการแห่งจุฬาลงกรณ์มหาวิทยาลัย", id: "56" },
    {
      name: "สถาบันบัณฑิตบริหารธุรกิจศศินทร์แห่งจุฬาลงกรณ์มหาวิทยาลัย",
      id: "58",
    },
  ];

  const categories = {
    wearable: "เครื่องแต่งกาย",
    gadget: "อุปกรณ์เครื่องใช้ขนาดเล็ก",
    big: "อุปกรณ์เครื่องใช้ขนาดใหญ่",
    books: "หนังสือและเอกสารการเรียน",
    draw: "เครื่องเขียนและอุปกรณ์ศิลปะ",
  };
  function getFacultyCategoryArray(input) {
    if (!Array.isArray(input) || input.length === 0) {
      return []; // Ensure input is a valid array
    }

    const facultyId = input[0]; // Get faculty ID
    const categoryKey = input[1]; // Get category key

    const facultyObj = facultyData.find((f) => f.id === facultyId); // Find faculty object
    const facultyName = facultyObj ? facultyObj.name : undefined; // Extract faculty name

    const categoryName = categories[categoryKey]; // Get category name

    return [facultyName, categoryName].filter(Boolean); // Remove undefined values
  }

  // Fetch product data
  const getProduct = async () => {
    try {
      const res = await fetch(
        `https://backend-cu-recom.up.railway.app/api/products${app}`,
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
          imageSrc={product.productImageUrls[0] || "/ph.jpg"}
          seller={product.sellerFirstNameTH + " " + product.sellerLastNameTH}
          price={product.price}
          tag={getFacultyCategoryArray(product.tag)}
        />
      ))}
    </div>
  );
}
