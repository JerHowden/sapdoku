import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'superautopets.wiki.gg',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
