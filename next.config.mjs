/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.microcms-assets.io"],
  },
};

export default config;
