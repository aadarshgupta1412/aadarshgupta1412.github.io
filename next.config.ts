import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // No basePath needed if using custom domain or username.github.io
};

export default nextConfig;
