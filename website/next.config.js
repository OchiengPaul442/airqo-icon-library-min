// @ts-check
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  transpilePackages: ['@airqo-icons-min/react', '@airqo-icons-min/core'], // Ensure packages are transpiled
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
