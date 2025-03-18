"use client";

import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Main() {
  setCookie("token", "test");

  return <div></div>;
}
