import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_TKN } from '@sdks/types-admin';

const publicPaths = ['/login'];

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (publicPaths.includes(request.nextUrl.pathname))
    return NextResponse.next();

  if (!request.cookies.get(ADMIN_TKN)) {
    return NextResponse.redirect(new URL(
      `/login?prev=${request.nextUrl.pathname + request.nextUrl.search}`,
      request.url,
    ));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};