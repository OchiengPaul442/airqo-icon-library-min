#!/bin/bash

# This script installs dependencies and builds the website for Vercel deployment

echo "Installing dependencies..."
pnpm install

echo "Building website..."
cd website && pnpm build

echo "Build complete!"
