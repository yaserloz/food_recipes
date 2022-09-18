/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ignoreDuringBuilds: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
