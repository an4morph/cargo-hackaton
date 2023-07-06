/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '34.89.184.248',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
