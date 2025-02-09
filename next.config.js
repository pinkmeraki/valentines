/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Forces static export
  images: { unoptimized: true },  // Fixes image issues for GitHub Pages
  basePath: "/valentines",  // Ensure this matches your GitHub repo name
  assetPrefix: "/valentines",
  trailingSlash: true  // Fixes GitHub Pages routing issues
};

module.exports = nextConfig;
