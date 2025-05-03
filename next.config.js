/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'default',
        path: '/sal-o'
    },
    basePath: '/sal-o',
    assetPrefix: '/sal-o/',
    trailingSlash: true,
    distDir: 'out',
    experimental: {
        images: {
            unoptimized: true,
        }
    }
}

module.exports = nextConfig