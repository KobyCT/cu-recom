// pages/index.js
"use client";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/app/component/chat"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Real-Time Chat Application</h1>
      <Chat />
    </div>
  );
}
