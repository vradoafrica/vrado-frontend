import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { getUserDetails } from './features/auth/services/api.js';
// import { getUserDetails } from './features/auth/services/api.js';




// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {


  const token = req.cookies.get('token')?.value

  // const token = await getUserDetails()
    if(!token)return NextResponse.redirect(new URL('/login', req.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*"
}