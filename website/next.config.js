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
  // Disable telemetry to avoid permission issues
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages deployment (uncomment if using a custom domain or subdirectory)
  // basePath: '/airqo-icon-library-min',
  // Configure webpack to handle local dependencies correctly
  webpack: (config, { isServer }) => {
    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Improve handling of local packages
    config.resolve.alias = {
      ...config.resolve.alias,
      '@airqo-icons-min/core': path.resolve(__dirname, '../packages/core'),
      '@airqo-icons-min/react': path.resolve(__dirname, '../packages/react'),
    };

    return config;
  },
};

module.exports = nextConfig;
