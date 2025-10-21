#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run type check
echo "Running type check..."
npm run type-check

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"