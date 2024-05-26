import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { GenerateChatID } from "./lib/uuid";

const protectedRoutes = ["/chat"];
const loginPath = "/auth/login";
const homepagePath = "/chat"

export default async function AuthMiddleware(req: NextRequest) {
  const url = req.nextUrl;
  // Check if the requested route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    url.pathname.startsWith(route)
  );
  const myCookie = cookies();
  const token = myCookie.get("next-auth.session-token");
  const isLoggedIn = token && token.value;

  // Redirect to homepage if logged-in user tries to access the login page
  if (url.pathname === loginPath && isLoggedIn) {
    return NextResponse.redirect(new URL(homepagePath, req.url));
  }
  if (url.pathname === "/" && isLoggedIn) {
    const chatID= GenerateChatID()
    const chatPageURL = `/chat/${chatID}`
    
    return NextResponse.redirect(new URL(chatPageURL, req.url));
  }

  // Redirect unauthenticated users from "/" to "/auth/login"
  if (url.pathname === "/" && !isLoggedIn) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }



  // Handle protected routes
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }

  // Allow access to non-protected routes or homepage if logged in
  return NextResponse.next();
}
