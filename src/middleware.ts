import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('user')
  const pathname = request.nextUrl.pathname
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// Configuração para pegar apenas as páginas que forem acessadas e não os assests ou api do Next
// Combine todos os caminhos de solicitação, exceto aqueles que começam com:
// - api (API routes)
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon file)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
