/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['assets.vercel.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}