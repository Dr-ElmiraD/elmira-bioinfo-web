import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Router i18n
  i18n: {
    locales: ["en", "tr", "fr", "fa"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

export default nextConfig;

