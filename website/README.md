# AirQo Icon Library Website

This is the documentation website for the AirQo Icon Library, built with [Next.js](https://nextjs.org).

## Overview

This website provides:

- A searchable gallery of all available icons
- Documentation for using the icons with different frameworks
- Installation instructions
- API references
- Interactive examples
- Contribution guidelines

## Getting Started

### Prerequisites

- Node.js (>=16)
- pnpm (>=8)

### Development

First, install dependencies from the root of the monorepo:

```bash
# From the root of the repository
pnpm install
```

Then, run the development server:

```bash
# From the website directory
pnpm dev
# or from the root of the repository
pnpm --filter website dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

```bash
# Build the website
pnpm build
```

### Project Structure

```
website/
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components
│   ├── lib/         # Utility functions and data
│   └── styles/      # Global styles and theme
└── ...              # Configuration files
```

## Deployment

The website is automatically deployed to [Vercel](https://vercel.com) when changes are pushed to the main branch.

## Contributing

See the [CONTRIBUTING.md](../CONTRIBUTING.md) file in the root of the repository for information on contributing to the website.

## License

MIT © AirQo
