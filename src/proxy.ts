import { NextRequest, NextResponse } from "next/server"

// غيّرها إلى false لإعادة تشغيل الموقع بالكامل.
const MAINTENANCE_MODE = true

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE || request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL("/maintenance", request.url))
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
