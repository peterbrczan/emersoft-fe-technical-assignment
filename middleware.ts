import createMiddleware from 'next-intl/middleware';
import {Locale} from "@/app/models/enums/locale";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [Locale.HU, Locale.EN],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: Locale.EN
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
