#!/bin/bash

# This script installs dependencies and builds the website2 for Vercel deployment

echo "Starting Vercel build process..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build core packages first
echo "Building core packages..."
pnpm build:core

# Build React package
echo "Building React package..."
cd packages/react && pnpm build && cd ../..

# Install website2 dependencies
echo "Installing website2 dependencies..."
cd website2
pnpm install --no-frozen-lockfile

# Build website2
echo "Building website2..."
pnpm build

echo "Build complete!"
