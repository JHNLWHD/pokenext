/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.pokemon.com', 'i.ibb.co'],
  },
}

module.exports = nextConfig
