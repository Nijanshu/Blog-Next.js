/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
}


module.exports = {
  images: {
    loader: 'custom',
    path: '/_next/image',
    domains: ['cdn.example.com'],
  },
};
