import createMiddleware from 'next-intl/middleware';
import { locales } from '@/misc/constants';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};