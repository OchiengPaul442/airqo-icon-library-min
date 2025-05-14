// vercel.config.js - Configuration for Vercel Monorepo deployment
module.exports = {
  monorepo: {
    mainWorkspace: '.',
    buildCommand: ({ workspace }) => {
      if (workspace === 'website2') {
        return 'pnpm build:website2';
      }
      return null;
    },
  },

  // Install command will be executed in the root directory
  installCommand: 'pnpm install',

  // Map the build outputs
  outputDirectory: {
    website2: 'website2/.next',
  },

  // Specify the target directory to deploy
  projectSettings: {
    framework: 'nextjs',
    buildCommand: 'pnpm build:website2',
    outputDirectory: 'website2/.next',
    rootDirectory: './',
  },
};
