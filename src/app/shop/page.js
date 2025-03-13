// app/page.jsx
"use client";
import { Dialog, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
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

const categories = [
  "หมวดหมู่",
  "หนังสือเรียน",
  "อุปกรณ์การเรียน",
  "อิเล็กทรอนิกส์",
];
const faculties = ["คณะ", "วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ"];

export default function Main() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTimeOpen, setisTimeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50  ">
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
        <div className="grid grid-cols-3 gap-8 w-full text-center divide-x-2 divide-black">
          <button className="" onClick={() => setIsCategoryOpen(true)}>
            หมวดหมู่
          </button>

          <button className="">ล่าสุด</button>

          <button className="">ราคา : สูงสุด - ต่ำสุด</button>
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-6 mt-20 px-2 no-scrollbar">
        {items.map((item, index) => (
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

      <Dialog
        open={isCategoryOpen}
        onClose={() => setIsCategoryOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
          <Dialog.Panel className="bg-white w-full p-6 rounded-t-2xl shadow-lg">
            <div className="w-12 h-1 bg-gray-300 rounded mx-auto mb-4"></div>
            <Dialog.Title className="text-lg font-semibold mb-4">
              หมวดหมู่
            </Dialog.Title>

            {/* Category Dropdown */}
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <div className="relative mb-4">
                <Listbox.Button className="w-full p-3 border rounded-lg flex justify-between items-center">
                  {selectedCategory}
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
                  {categories.map((category) => (
                    <Listbox.Option
                      key={category}
                      value={category}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {category}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Faculty Dropdown */}
            <Listbox value={selectedFaculty} onChange={setSelectedFaculty}>
              <div className="relative mb-6">
                <Listbox.Button className="w-full p-3 border rounded-lg flex justify-between items-center">
                  {selectedFaculty}
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
                  {faculties.map((faculty) => (
                    <Listbox.Option
                      key={faculty}
                      value={faculty}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {faculty}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Search Button */}
            <button
              className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg"
              onClick={() => setIsCategoryOpen(false)}
            >
              ค้นหา
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
