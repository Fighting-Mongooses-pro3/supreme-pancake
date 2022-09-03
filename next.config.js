/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.vercel.com", "lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};
