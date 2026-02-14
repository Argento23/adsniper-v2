
// Updated at: Thu Feb 13 23:40:00 -03 2026 (Force Re-deploy)
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'manager.generarise.space',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      }
    ],
  },
};

export default nextConfig;
