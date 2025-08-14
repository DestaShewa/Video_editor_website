// This is the complete code for middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/portfolio-manager"];
const authRoutes = ["/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.get("auth_token")?.value === "true";

  // If user is authenticated and tries to access a login page, redirect to dashboard
  if (isAuthenticated && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is not authenticated and tries to access a protected route, redirect to login
  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // We also need to rewrite the /api/login response to set the cookie
  if (pathname === "/api/login") {
    return handleLoginResponse(request);
  }

  return NextResponse.next();
}

// A helper function to handle the login response and set the cookie
async function handleLoginResponse(request: NextRequest) {
  // First, let the actual API route handle the request
  const response = await fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: await request.text(),
  });

  // Create a response that we can modify
  const nextResponse = new NextResponse(response.body, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });

  // If login was successful (status 200), set the cookie
  if (response.ok) {
    nextResponse.cookies.set("auth_token", "true", {
      httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
  }

  return nextResponse;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/portfolio-manager", "/login", "/api/login"],
};
