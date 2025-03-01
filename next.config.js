/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js image optimization
  basePath: "/voltsoftware.xyz",
  assetPrefix: "/voltsoftware.xyz/",
};

module.exports = nextConfig;
