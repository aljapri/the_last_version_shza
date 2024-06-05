

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com"],
    domains: ["workik-widget-assets.s3.amazonaws.com"],
  },
};

export default withNextIntl(nextConfig);