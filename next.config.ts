import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true, // 308 or 301
      },
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;
