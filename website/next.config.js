// @ts-check
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Enable transpilation of workspace packages
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during build
    dirs: ['src'],
  },
  transpilePackages: ['@airqo-icons-min/react', '@airqo-icons-min/core'],
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
