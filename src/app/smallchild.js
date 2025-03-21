"use client";

import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PassToken({ name, arg, name2, arg2 }) {
  const router = useRouter();
  setCookie(name, arg, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/", // Available across the site
  });
  setCookie(name2, arg2, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/", // Available across the site
  });
  router.refresh();

  return <div></div>;
}
