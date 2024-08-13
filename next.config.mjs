/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['imgix.cosmicjs.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;