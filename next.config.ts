import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',

  // Disable server-side features for static export
  trailingSlash: true,

  // Minimal optimizations for Lighthouse recommendations
  compiler: {
    // Remove unused code in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configure for static images (no Image Optimization API)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
