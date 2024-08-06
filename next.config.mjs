/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['jsx', 'js'],
    images: {
        domains: ['firebasestorage.googlepapis.com'],
    },
};

export default nextConfig;
