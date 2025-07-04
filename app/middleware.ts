import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const I18N = {
  defaultLocale: 'pt',
  locales: ['pt', 'en'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = I18N.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${I18N.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};