import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath:
    process.env.NODE_ENV === "production"
      ? "/hello-world-landing"
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/hello-world-landing/"
      : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;