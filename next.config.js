/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/belleza',
    assetPrefix: '/belleza'
}

module.exports = nextConfig