import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '/yonitara-ui',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sharans1998.github.io',
        pathname: '/yonitara-ui/**',
      },
    ],
  },
};

export default nextConfig;
