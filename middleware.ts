import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { Language, utsLocaleToLanguage } from "@magic-translate/react-ssr";

const DEFAULT_LANG = Language.EN;

function getLocale(request: NextRequest) {
  const headers = Array.from<[string, string]>(
    request.headers.entries()
  ).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";
  let locales = new Set(languages.map((lang) => utsLocaleToLanguage(lang)));

  return match(languages, Array.from(locales), defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = Object.values<Language>(Language).every(
    (language) =>
      !pathname.startsWith(`/${language}/`) && pathname !== `/${language}`
  );

  // Redirect if there is no locale
  const locale = getLocale(request);

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }

  const response = NextResponse.next();
  response.headers.set("Content-Language", pathname.split("/")[1]);
  return response;
}

export const config = {
  matcher: [
    // Skip static files
    "/((?!.*\\.).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
