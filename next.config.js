/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  images: { unoptimized: true },  // Fixes images for GitHub Pages
  basePath: "/valentines",  // Change to match your repo name
  assetPrefix: "/valentines"
};

module.exports = nextConfig;
