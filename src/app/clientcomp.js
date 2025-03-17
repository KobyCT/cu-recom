// File: app/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./component/Navbar";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// Product component function
function ProductCard({ isNew = true, pic = "/ph.jpg" }) {
  return (
    <div className="min-w-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
      <div className="relative h-40 w-full">
        {isNew && (
          <div className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded z-10 text-xs">
            NEW
          </div>
        )}
        <Image src={pic} alt="Product item" fill className="object-cover" />
      </div>
    </div>
  );
}

export default function Home({ children }) {
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  const searchParams = useSearchParams()
    
      const search = searchParams.get('search')
     
      // This will not be logged on the server when using static rendering
      console.log(search)
  return (
    <div className="flex flex-col min-h-screen bg-white pb-16">
      {/* Header with hero image */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/chula.jfif"
          alt="University Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start p-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
            Boost up,
            <br />
            Chula!
          </h1>
        </div>
      </div>

      {/* Shopping CTA Button */}
      <div className="relative z-10 flex justify-center -mt-16 mb-0">
        <Link
          href={"/shop"}
          className="w-3/4 py-4 bg-customPink hover:bg-pink-600 text-white text-xl font-medium rounded-full shadow-lg transition text-center"
        >
          Go Shopping
        </Link>
      </div>

      {/* Featured Promotions Grid */}
      <div className="relative ">
        <div className="grid grid-cols-2 mb-6">
          {/* Promotion Card 1 */}
          <div className="relative h-48  overflow-hidden">
            <Image
              src="/ph.jpg"
              alt="Promotion 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-100 to-transparent p-4 flex flex-col justify-end">
              <div className="bg-pink-200 text-pink-800 px-3 py-1 text-sm w-fit">
                แก้วกินนี่
              </div>
            </div>
          </div>

          {/* Promotion Card 2 */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src="/ph.jpg"
              alt="Promotion 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">MIDTERM</h3>
              <h3 className="text-white text-xl font-bold">SALES</h3>
              <h3 className="text-white text-xl font-bold">IS COMING</h3>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Arrival</h2>
            <p className="text-gray-500">You've never seen it before!</p>
          </div>
          <Link href="/all" className="text-gray-700">
            View all
          </Link>
        </div>

        {/* New Products Scrollable Row - UPDATED TO USE PRODUCTCARD COMPONENT */}
        <div className="flex-grow">
          {clientReady ? (
            children
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center">
              {/* Spinner Animation */}
              <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mt-8"></div>
              <p className="text-gray-500 mt-4">กำลังโหลด...</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavItem home={true} />
    </div>
  );
}
