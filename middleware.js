import { NextResponse } from "next/server";

export function middleware(request) {
  const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "es";
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
