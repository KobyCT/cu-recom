"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import NavItem from "@/app/component/Navbar";
import HeaderSearchLess from "@/app/component/headerns";
import dynamic from 'next/dynamic';

// Import the server component dynamically to avoid hydration issues
import UnappProducts from "./server";

export default function StorePage({children,Unapproveitem}) {
  const [hasError, setHasError] = useState(false);
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <HeaderSearchLess Title="ร้านค้าของฉัน" />

      {/* Profile Card */}
      {clientReady ? (
        children
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* Spinner Animation */}
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mt-8"></div>
          <p className="text-gray-500 mt-4">กำลังโหลด...</p>
        </div>
      )}
      

      <NavItem profile={true} />
    </div>
  );
}

function Section({ title, type }) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-lg mb-2">สินค้าที่ยืนยันแล้ว</h2>
      <div className="space-y-4">
          <UnappProducts app={type} />
      </div>
    </div>
  );
}

// Simple error boundary component
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by error boundary:", error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="flex-grow flex items-center justify-center mt-10">
        <p className="text-red-500">Error loading products. Please try again later.</p>
      </div>
    );
  }

  return children;
}