module.exports = {
  monorepo: {
    mainWorkspace: '.',
    buildCommand: ({ workspace }) => {
      if (workspace === 'website2') {
        return 'cd .. && pnpm build:website2';
      }
      return null;
    },
    ignorePackages: ['packages/flutter'], // Ignore Flutter packages which Vercel can't build
  },
};
