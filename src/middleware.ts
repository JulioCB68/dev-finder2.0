import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const baseUrl = process.env.BASE_URL || '' // Defina a URL base do seu aplicativo
  const token = request.cookies.get('auth-session-token')
  const pathname = request.nextUrl.pathname

  if (pathname === '/auth' && token) {
    return NextResponse.redirect('/')
  }

  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/auth', request.url))
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
