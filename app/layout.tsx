import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Language } from "@magic-translate/react-ssr";
import { headers } from "next/headers";
import { T } from "@/app/lib/translate";
import { useCurrentLanguage } from "@/app/lib/use-current-language";
import { getWebappUrl } from "@/app/lib/get-host";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useCurrentLanguage();

  return (
    <html lang={language}>
      <head>
        {Object.values<Language>(Language).map((language) => (
          <link
            key={language}
            rel="alternate"
            hrefLang={language}
            href={`${getWebappUrl()}/${language}`}
          />
        ))}
      </head>
      <body className={inter.className}>
        <main className="p-8 gap-8 flex flex-col justify-between min-h-screen max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
