/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  ouput: "export",
  distDir: "dist",
  trailingSlash: true,
  // experimental: {
  //   appDir: true,
  // },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //   };
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
