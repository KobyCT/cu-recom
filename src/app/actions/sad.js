"use server";

import { cookies } from "next/headers";

export default async function SetCookie(params) {
  const cookieStore = await cookies();
  cookieStore.set("token", params, {
    maxAge: 60 * 60 * 24 * 30,
  });
  return { Success: true };
}
