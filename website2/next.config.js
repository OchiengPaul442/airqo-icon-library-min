/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Resolve aliases for modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@airqo-icons-min/react/client': require.resolve(
        '@airqo-icons-min/react/client',
      ),
      'framer-motion': require.resolve('framer-motion'),
      'lucide-react': require.resolve('lucide-react'),
    };

    return config;
  },
  transpilePackages: ['@airqo-icons-min/core', '@airqo-icons-min/react'],
};

module.exports = nextConfig;
