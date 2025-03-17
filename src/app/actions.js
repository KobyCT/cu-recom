"use server";
import { cookies } from "next/headers";

// This is a server action for fetching the token and setting cookies
export default async function getTokenAndSetCookie(token) {
  try {
    const res = await fetch(
      `https://backend-cu-recom.up.railway.app/api/auth/callback?token=${token}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const cunextoken = await res.json();
    
    // Set the cookie within the server action
    cookies().set("token", cunextoken.token || JSON.stringify(cunextoken));
    
    return cunextoken;
  } catch (error) {
    console.error("Failed to fetch token:", error);
    return { error: error.message };
  }
}
