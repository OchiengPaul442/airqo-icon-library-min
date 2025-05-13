import path from 'path';

// Define a simpler NextConfig type since we can't import from next
interface WebpackConfigContext {
  isServer: boolean;
}

interface NextConfig {
  reactStrictMode?: boolean;
  experimental?: Record<string, unknown>;
  env?: Record<string, string>;
  output?: 'standalone' | 'export';
  basePath?: string;
  serverExternalPackages?: string[];
  webpack?: (config: any, context: WebpackConfigContext) => any;
}

const nextConfig: NextConfig = {
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
  // Base path for GitHub Pages deployment (remove if not using a custom domain or subdirectory)
  // basePath: '/airqo-icon-library-min',
  // Server external packages (moved from experimental.serverComponentsExternalPackages)
  serverExternalPackages: [],
  // Configure webpack to handle local dependencies correctly
  webpack(config, { isServer }) {
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

// For GitHub Pages custom 404 handling, we'll rely on the 404.html file

export default nextConfig;
