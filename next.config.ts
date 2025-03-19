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
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
