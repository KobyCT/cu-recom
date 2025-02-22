// File: app/page.jsx
"use client";
import Image from 'next/image';
import Link from 'next/link';

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
        <Image
          src= {pic}
          alt="Product item"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-16">
      {/* Header with hero image */}
      <div className="relative w-full h-80 md:h-96">
        <Image 
          src="/ph.jpg"
          alt="University Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start p-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
            Boost up,<br />
            Chula!
          </h1>
        </div>
      </div>

      {/* Shopping CTA Button */}
      <div className="px-4 -mt-6 mb-6 relative z-10 flex justify-center">
        <Link href={"/shop"} className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white text-xl font-medium rounded-full shadow-lg transition text-center" >
          Go Shopping
        </Link>
      </div>

      {/* Featured Promotions Grid */}
      <div className="grid grid-cols-2 gap-2 px-2 mb-6">
        {/* Promotion Card 1 */}
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src="/ph.jpg"
            alt="Promotion 1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-100 to-transparent p-4 flex flex-col justify-end">
            <div className="bg-pink-200 text-pink-800 px-3 py-1 rounded-lg text-sm w-fit">
              แก้วกินนี่
            </div>
            <div className="absolute top-2 right-2">
              <div className="bg-teal-400 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-lg font-bold">3</span>
                  <span className="text-xs">บาท</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion Card 2 */}
        <div className="relative h-48 rounded-lg overflow-hidden">
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
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
          <ProductCard pic= "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg"/>
          <ProductCard />
          <ProductCard />
          <ProductCard isNew={false} />
          <ProductCard />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
  <div className="container mx-auto flex justify-evenly items-center py-2">
    <Link href="/" className="flex flex-col items-center text-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span className="text-xs">Home</span>
    </Link>

    <Link href="/shop" className="flex flex-col items-center text-gray-400">
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
    </div>
  );
}