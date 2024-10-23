import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import '../globals.css';
import { Loyout } from '@/components/_Loyout';

export const metadata: Metadata = {
  title: 'Dev Compare - Comprehensive IT Solutions and E-Commerce Services',
  description:
    'Dev Compare offers expert IT solutions, including development, web and mobile apps, e-commerce services, SEO, and quality assurance.',
  keywords:
    'IT solutions, development, web development, mobile apps, e-commerce, SEO, QA, software development',

  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Dev Compare',
    description:
      'Transforming your digital presence with expert IT and e-commerce solutions.',
    type: 'website',
    url: 'https://www.devcompare.md',
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
      <body>
        <NextIntlClientProvider messages={lang}>
          <Loyout>{children}</Loyout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
