/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '/sal-o',
    assetPrefix: '/sal-o',
    reactStrictMode: true
}

module.exports = nextConfig