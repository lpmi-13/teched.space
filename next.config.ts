import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal optimizations for Lighthouse recommendations
  compiler: {
    // Remove unused code in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable modern image formats
  images: {
    formats: ['image/webp'],
  },
};

export default nextConfig;
