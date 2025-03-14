// app/page.jsx
"use client";
import { Dialog, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../component/Navbar";
import Product from "../component/card";


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
  "เครื่องแต่งกาย",
  "อุปกรณ์เครื่องใช้ขนาดเล็ก",
  "อุปกรณ์เครื่องใช้ขนาดใหญ่",
  "หนังสือและเอกสารการเรียน",
  "เครื่องเขียนและอุปกรณ์ศิลปะ"
];
const facultyData = [
  { name: "Chula Alumni or not from Chula", id: "99" },
  { name: "The Sirindhorn Thai Language Institute", id: "01" },
  { name: "General Education Center", id: "02" },
  { name: "Graduate School", id: "20" },
  { name: "Faculty of Engineering", id: "21" },
  { name: "Faculty of Arts", id: "22" },
  { name: "Faculty of Science", id: "23" },
  { name: "Faculty of Political Science", id: "24" },
  { name: "Faculty of Architecture", id: "25" },
  { name: "Faculty of Commerce and Accountancy", id: "26" },
  { name: "Faculty of Education", id: "27" },
  { name: "Faculty of Communication Arts", id: "28" },
  { name: "Faculty of Economics", id: "29" },
  { name: "Faculty of Medicine", id: "30" },
  { name: "Faculty of Veterinary Science", id: "31" },
  { name: "Faculty of Dentistry", id: "32" },
  { name: "Faculty of Pharmaceutical Sciences", id: "33" },
  { name: "Faculty of Law", id: "34" },
  { name: "Faculty of Fine and Applied Arts", id: "35" },
  { name: "Faculty of Nursing", id: "36" },
  { name: "Faculty of Allied Health Sciences", id: "37" },
  { name: "Faculty of Psychology", id: "38" },
  { name: "Faculty of Sports Science", id: "39" },
  { name: "School of Agricultural Resources", id: "40" },
  { name: "College of Population Studies", id: "51" },
  { name: "College of Public Health Sciences", id: "53" },
  { name: "Language Institute", id: "55" },
  { name: "School of Integrated Innovation", id: "56" },
  { name: "Sasin Graduate Institute of Business Administration", id: "58" },
];



export default function Main() {
  const [qurr,setqurr] = useState({
    faculty:"",
    category:"",
    time:"ล่าสุด",
    price:"low to high"
  })
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTimeOpen, setisTimeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedFaculty, setSelectedFaculty] = useState(qurr.faculty);
  const time =["ล่าสุด","เก่าสุด"]
  
  function toDo(){
    setIsCategoryOpen(false)
    console.log(qurr)
  }
  function toDo2(){
    setisTimeOpen(false)
    console.log(qurr)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setqurr((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

          <button className="" onClick={() => setisTimeOpen(true)}>{qurr.time}</button>

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
            <select
                  name="category"
                  value={qurr.category}
                  className="w-full border-solid border outline-black rounded-md focus:outline-black p-2 mt-2"
                  aria-label="Category selection"
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))} </select>


            {/* Faculty Dropdown */}
            <p>คณะ</p>
            <select
                  name="faculty"
                  value={qurr.faculty}
                  className="w-full border-solid border outline-black rounded-md focus:outline-black p-2 mt-2"
                  aria-label="Faculty selection"
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  {facultyData.map((faculty, i) => (
                    <option key={i} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))} </select>

            {/* Search Button */}
            <button
              className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg mt-3"
              onClick={() => toDo()}
            >
              ค้นหา
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Dialog
        open={isTimeOpen}
        onClose={() => setisTimeOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
          <Dialog.Panel className="bg-white w-full p-6 rounded-t-2xl shadow-lg">
            <div className="w-12 h-1 bg-gray-300 rounded mx-auto mb-4"></div>
            <Dialog.Title className="text-lg font-semibold mb-2">
              ระยะเวลา
            </Dialog.Title>

            {/* Category Dropdown */}
            <select
                  name="time"
                  value={qurr.time}
                  className="w-full border-solid border outline-black rounded-md focus:outline-black p-2 mt-2"
                  aria-label="Time selection"
                  onChange={handleChange}
                >
                  <option value="">-</option>
                  {time.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))} </select>

            {/* Search Button */}
            <button
              className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg mt-3"
              onClick={() => toDo2()}
            >
              ค้นหา
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
