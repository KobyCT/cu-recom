'use client';

import { useState } from 'react';
import { FaHome, FaShoppingCart, FaPlus, FaComments, FaUser } from 'react-icons/fa';
import NavItem from '@/app/component/Navbar';
import HeaderSearchLess from '../component/headerns';
import Link from 'next/link';
const categories = [
  'เครื่องแต่งกาย',
  'อุปกรณ์เครื่องใช้ขนาดเล็ก',
  'อุปกรณ์เครื่องใช้ขนาดใหญ่',
  'หนังสือและเอกสารการเรียน',
  'เครื่องเขียนและอุปกรณ์ศิลปะ'
];

export default function SellProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Header */}
      <HeaderSearchLess Title="เลือกหมวดหมู่สินค้า" prevPage="/"/>

      {/* Category Selection */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">เลือกหมวดหมู่ของสินค้าที่ต้องการขาย</h2>
        <div className="w-full max-w-md">
        <Link href="/addItem/wearable" className="block w-full bg-white p-3 mb-3 rounded-lg shadow-md text-gray-800 text-center hover:bg-gray-200 transition">เครื่องแต่งกาย</Link>
        <Link href="/addItem/gadget" className="block w-full bg-white p-3 mb-3 rounded-lg shadow-md text-gray-800 text-center hover:bg-gray-200 transition">อุปกรณ์เครื่องใช้ขนาดเล็ก</Link>
        <Link href="/addItem/big" className="w-full block bg-white p-3 mb-3 rounded-lg shadow-md text-gray-800 text-center hover:bg-gray-200 transition">อุปกรณ์เครื่องใช้ขนาดใหญ่</Link>
        <Link href="/addItem/books" className="w-full block bg-white p-3 mb-3 rounded-lg shadow-md text-gray-800 text-center hover:bg-gray-200 transition">หนังสือและเอกสารการเรียน</Link>
        <Link href="/addItem/draw" className="w-full block bg-white p-3 mb-3 rounded-lg shadow-md text-gray-800 text-center hover:bg-gray-200 transition">เครื่องเขียนและอุปกรณ์ศิลปะ</Link>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-3 flex justify-around items-center fixed bottom-0 w-full">
        <NavItem/>
      </nav>
    </div>
  );
}