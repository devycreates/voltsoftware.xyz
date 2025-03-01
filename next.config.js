/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  distDir: "out",   // Output directory
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;
