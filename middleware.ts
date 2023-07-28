'use server'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
  console.log('Middleware', request.nextUrl);

  const allCookies = request.cookies.getAll();
  console.log('allCookies', allCookies);

  const setCookie = NextResponse.next();
  setCookie.cookies.set({
    name: 'NextApp',
    value: 'Cookie Value',
    path: '/'
  });

  return setCookie;

  // return NextResponse.redirect(new URL('/', request.url)) //rewrite
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/login',
}