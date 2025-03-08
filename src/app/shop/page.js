// app/page.jsx
"use client";

import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from '../component/Navbar';
import Product from '../component/card';


const categoryList = ['Physics', 'Chemistry', 'Biology', 'Stationery'];
const items = [
  { title: 'Physics 2nd Edition', price: '150฿', category: 'Physics',id:1 },
  { title: 'Biology Book', price: '170฿', category: 'Biology',id:2 },
  { title: 'Drawing Table', price: '2500฿', category: 'Stationery',id:3 },
  { title: 'Macroeconomics 10th Ed', price: '1200฿', category: 'Economy',id:4 },
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
      <NavItem
      shop={true}/>
      </nav>
    </div>
  );} else{return(
    
    <div className="min-h-screen flex flex-col">
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
      
      <div className="grid grid-cols-1  gap-6 mt-6 px-2 no-scrollbar" >
        {items.map((item, index) => (
          <Product
            id={item.id}
            key={index}
            product_name={item.title}
            price={item.price}
            category={item.category}
            seller={"Seller"}/>
        ))}
      </div>
      <NavItem
      shop={true}/>
    </div>)
  }
}

