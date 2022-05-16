/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_LINK: "http://localhost:4000",
  },
};

module.exports = nextConfig;
