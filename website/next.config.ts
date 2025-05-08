import path from 'path';

// Define a simpler NextConfig type since we can't import from next
interface WebpackConfigContext {
  isServer: boolean;
}

interface NextConfig {
  reactStrictMode?: boolean;
  experimental?: Record<string, unknown>;
  env?: Record<string, string>;
  serverExternalPackages?: string[];
  webpack?: (config: any, context: WebpackConfigContext) => any;
  output?: string;
  basePath?: string;
  assetPrefix?: string;
  images?: {
    unoptimized?: boolean;
  };
}

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] || 'airqo-icon-library-min';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static exports for GitHub Pages
  output: 'export',
  // Set the correct base path for GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : '',
  // Set asset prefix for GitHub Pages
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Disable telemetry to avoid permission issues
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
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

export default nextConfig;
