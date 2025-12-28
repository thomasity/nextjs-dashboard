import type { NextConfig } from 'next';
import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service';

const nextConfig: NextConfig = {
  env: {
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_ENV: process.env.NEXT_PUBLIC_SITE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  output: "standalone",
  outputFileTracingIncludes: {
    "/app/api/**": ["./prisma/certs/global-bundle.pem"]
  }
};

export default nextConfig;
