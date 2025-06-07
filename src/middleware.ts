import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt";





// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {

  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET });

    if(!token)return NextResponse.redirect(new URL('/register', req.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*"
}