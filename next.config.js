/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Forces static export
  images: { unoptimized: true },  // Fixes image issues for GitHub Pages
  basePath: "/valentines",  // Change to match your GitHub repo name
  assetPrefix: "/valentines"
};

module.exports = nextConfig;
