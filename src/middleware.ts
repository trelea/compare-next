import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ro', 'en', 'ru'],
  alternateLinks: false,
  // Used when no locale matches
  defaultLocale: 'ro',
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    '/(ro|ru|en)/:path*',
  ],
};
