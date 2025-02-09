/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Required for static hosting
  images: { unoptimized: true },  // Fixes Next.js image issues
  basePath: "/valentines",  // Ensure this matches your GitHub repo name
  assetPrefix: "/valentines"
};

module.exports = nextConfig;
