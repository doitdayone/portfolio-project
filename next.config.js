const repo = "portfolio-project";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
