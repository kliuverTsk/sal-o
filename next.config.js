/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'kliuvertsk.github.io',
            pathname: '/sal-o/**'
        }]
    },
    basePath: '/sal-o',
    assetPrefix: '/sal-o',
    trailingSlash: true,
    skipTrailingSlashRedirect: true
}

module.exports = nextConfig