/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    typescript: {
        ignoreBuildErrors: true,
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
