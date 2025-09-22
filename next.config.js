/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain.com'], // Add your image domains here
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;