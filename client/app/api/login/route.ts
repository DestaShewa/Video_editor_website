// This is the complete code for: app/api/login/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Assumes your db connection is in lib/db.ts
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    // Use a promise-based query to safely check for the user
    const [rows]: any = await db
      .promise()
      .query("SELECT * FROM users WHERE username = ? AND password = ?", [
        username,
        password,
      ]);

    if (rows.length > 0) {
      // If a user is found, set the authentication cookie
      cookies().set("auth_token", "true", {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        path: "/", // Cookie is available for all paths
        maxAge: 60 * 60 * 24, // Cookie expires in 1 day
      });
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      // If no user is found, return an authorization error
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred" },
      { status: 500 }
    );
  }
}
