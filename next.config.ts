import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '/yonitara-ui',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.tsx',
  },
};

export default nextConfig;
