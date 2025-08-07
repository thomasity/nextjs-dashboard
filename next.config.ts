import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  }
};

export default nextConfig;
