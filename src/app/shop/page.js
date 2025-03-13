// app/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../component/Navbar";
import Product from "../component/card";

const categoryList = ["Physics", "Chemistry", "Biology", "Stationery"];
const items = [
  { title: "Physics 2nd Edition", price: "150฿", category: "Physics", id: 1 },
  { title: "Biology Book", price: "170฿", category: "Biology", id: 2 },
  { title: "Drawing Table", price: "2500฿", category: "Stationery", id: 3 },
  {
    title: "Macroeconomics 10th Ed",
    price: "1200฿",
    category: "Economy",
    id: 4,
  },
];

export default function Main() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50 ">
        <Link href="/" className="text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold">Shop</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </nav>

      <nav className="p-4 flex justify-between items-center fixed top-12 left-0 w-full bg-white shadow-md z-40">
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg">Choose a category</h1>
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-6 mt-20 px-2 no-scrollbar">
        {items
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory
          )
          .map((item, index) => (
            <Product
              id={item.id}
              key={index}
              product_name={item.title}
              price={item.price}
              category={item.category}
              seller={"Seller"}
            />
          ))}
      </div>
      <NavItem shop={true} />
      <div className="h-16 relative" />
    </div>
  );
}
