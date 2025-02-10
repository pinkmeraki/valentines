/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures Next.js generates static files
  images: { unoptimized: true }, // Fixes image loading issues
  basePath: "/valentines", // Tells Next.js to serve files from /valentines/
  assetPrefix: "/valentines", // Ensures assets (CSS, JS) load correctly
  trailingSlash: true, // Fixes GitHub Pages path issues
};

module.exports = nextConfig;

