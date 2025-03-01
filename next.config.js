/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  basePath: "/voltsoftware.xyz",
  assetPrefix: "/voltsoftware.xyz/",
};

module.exports = nextConfig;
