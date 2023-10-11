/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
}

module.exports = {
  // Target must be serverless
  target: 'serverless'
};