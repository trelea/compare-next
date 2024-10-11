import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "./globals.css";
import { Loyout } from "@/components/_Loyout";

export const metadata: Metadata = {
  title: "ComPare",
  description: "ComPare Best IT Solutions",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const lang = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={lang}>
          <Loyout>{children}</Loyout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
