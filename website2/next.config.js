/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  transpilePackages: ['@airqo-icons-min/core', '@airqo-icons-min/react'],
};

module.exports = nextConfig;
