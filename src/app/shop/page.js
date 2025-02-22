// app/page.jsx
"use client";

import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categoryList = ['Physics', 'Chemistry', 'Biology', 'Stationery'];
const items = [
  { title: 'Physics 2nd Edition', price: '150฿', category: 'Physics' },
  { title: 'Biology Book', price: '170฿', category: 'Biology' },
  { title: 'Drawing Table', price: '2500฿', category: 'Stationery' },
  { title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },{ title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },{ title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },{ title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },{ title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },{ title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy' },
];

export default function Main() {
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    function CategoryCard({ title, imageSrc, imageAlt, short }) {
        return (
          <div className="rounded-lg overflow-hidden bg-white shadow-sm border shadow-md h-32 md:h-40">
            <button 
              onClick={() => setCategories(short)} 
              className="w-full h-full flex"
            >
              <div className="flex items-center px-6 flex-1">
                <h3 className="text-xl font-medium text-gray-800">{title}</h3>
              </div>
              <div className="relative w-40 md:w-60">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 160px, 240px"
                />
              </div>
            </button>
          </div>
        );
      }
      if (categories === null){
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Navigation bar */}
      <nav className="p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold">Categories</h1>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </nav>
      
      <main className="flex-1 px-4 pb-20">
        {/* Banner */}
        <div className="rounded-lg bg-pink-400 text-white text-center py-10 px-4 mb-6 shadow-lg">
          <h2 className="text-4xl font-bold mb-2">MIDTERM SALES</h2>
          <p className="text-xl">Up to 50% off</p>
        </div>
        
        {/* Category Cards */}
        <div className="flex flex-col gap-4">
          <CategoryCard 
            title="New Arrival" 
            imageSrc="/ph.jpg" 
            imageAlt="New arrivals with cute cartoon character"
            short={"NA"} 
          />
          
          <CategoryCard 
            title="Clothing & Accessories" 
            imageSrc="/ph.jpg" 
            imageAlt="Clothing on hangers" 
            short={"CA"}
          />
          
          <CategoryCard 
            title="Books & Stationery" 
            imageSrc="/ph.jpg" 
            imageAlt="Stack of books"
            short={"BS"} 
          />
          
          <CategoryCard 
            title="Furnitures & Dorm Essentials" 
            imageSrc="/ph.jpg" 
            imageAlt="Desk and chair in dorm room" 
            short="FD"
          />
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t py-2">
        <NavItem></NavItem>
      </nav>
    </div>
  );} else{return(
    
    <div className="min-h-scree</div>n flex flex-col">
        <nav className="p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
        <Link href="/shop" className="text-2xl" onClick={() => setCategories(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold">{categories}</h1>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </nav>
      
      
      <div className="flex gap-2 overflow-x-auto pb-2 pt-16">
        {categoryList.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg border border-pink-700 hover:bg-pink-600"
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-2 no-scrollbar" >
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <Image src="/ph.jpg" alt={item.title} width={200} height={250} className="w-full h-auto object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-pink-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
      <NavItem></NavItem>
    </div>)
  }
}

// Category Card Component


// Navigation Item Component
function NavItem() {
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
  <div className="container mx-auto flex justify-evenly items-center py-2">
    <Link href="/" className="flex flex-col items-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span className="text-xs">Home</span>
    </Link>

    <Link href="/shop" className="flex flex-col items-center text-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span className="text-xs">Shop</span>
    </Link>

    <div className="flex flex-col items-center">
      <button className="h-14 w-14 bg-pink-500 rounded-full flex items-center justify-center -mt-5 text-white shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>

    <Link href="/favorites" className="flex flex-col items-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <span className="text-xs">Favorites</span>
    </Link>

    <Link href="/profile" className="flex flex-col items-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span className="text-xs">Profile</span>
    </Link>
  </div>
</div>
  );
}

