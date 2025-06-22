import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt";
import { cookies } from 'next/headers';





// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const allCookies = await cookies()
  const token = allCookies.get("token")
  console.log(token)
    if(!token)return NextResponse.redirect(new URL('/login', req.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*"
}