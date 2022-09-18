import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next'

export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()   
  console.log(request)
  if (url.pathname === '/') {
    const lang = request.cookies.get("lang") ?? 'en'
    url.pathname = '/'+lang+'/recipes'
    return NextResponse.redirect(url)   
  } 
}