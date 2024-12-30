import withBundleAnalyzer from "@next/bundle-analyzer";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@/components/ui"],
  },
};

const config = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  nextConfig
);

export default config;
