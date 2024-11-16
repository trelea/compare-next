import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['ro', 'en', 'ru'],
  //   localeDetection: false,
  // },
};

export default withNextIntl(nextConfig);
