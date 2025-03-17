// app/api/set-cookie/route.js
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;

  const name = searchParams.get("name") || "test-cookie";
  const value = searchParams.get("value") || "test-value";

  try {
    cookieStore.set(name, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return NextResponse.json(
      { success: true, message: `Cookie ${name} set successfully via GET` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error setting cookie via GET:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
