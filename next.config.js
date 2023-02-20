/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "lexica-serve-encoded-images2.sharif.workers.dev",
    ],
  },
};

module.exports = nextConfig;
