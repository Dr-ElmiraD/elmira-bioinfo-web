/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr", "fr", "fa"],
    defaultLocale: "en",
    localeDetection: true,
  },
};
module.exports = nextConfig;
