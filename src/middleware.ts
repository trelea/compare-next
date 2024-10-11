import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/home",
    "/about",
    "/contacts",
    "/portofolio",
    "/services",
    "/thanks",
    "/(en|ro|ru)/:path*",
  ],
};
