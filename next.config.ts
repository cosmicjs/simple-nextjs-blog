import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['imgix.cosmicjs.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
