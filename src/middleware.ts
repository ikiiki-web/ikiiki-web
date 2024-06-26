import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_BASIC_ACTIVE === 'true') {
    const basicAuth = req.headers.get('authorization')
    const url = req.nextUrl
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      if (
        user === process.env.NEXT_PUBLIC_BASIC_AUTH_USER &&
        pwd === process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next()
      }
    }
    url.pathname = '/api/auth'

    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/',
}
