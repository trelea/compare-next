import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "../globals.css";
import { Loyout } from "@/components/_Loyout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dev Compare",
    template: "%s | Dev Compare",
  },
  description:
    "Alege cu încredere cel mai bun dezvoltator IT! Soluții software, tehnologii și prețuri accesibile la DevCompare – totul într-un singur loc.",
  keywords: [
    "dev compare",
    "devcompare",
    "DevCompare",
    "Dev Compare",
    "compare",
    "Compare",
    "dev compare moldova",
    "Dezvoltatori IT Moldova",
    "Servicii IT Moldova",
    "Comparare dezvoltatori web în Moldova",
    "Companii software Moldova",
    "Servicii software în Moldova",
    "Dezvoltatori web Chișinău",
    "Comparare prețuri dezvoltare software Moldova",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dev Compare",
    description:
      "Alege cu încredere cel mai bun dezvoltator IT! Soluții software, tehnologii și prețuri accesibile la DevCompare – totul într-un singur loc.",
    siteName: "Dev Compare",
    url: `${process.env.DOMAIN_NAME}`,
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const lang = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={lang}>
          <Loyout>{children}</Loyout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
