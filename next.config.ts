import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === "GH_PAGES";
const repo = process.env.REPO_NAME ?? "";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGhPages ? `${basePath}/` : undefined,
  images: { unoptimized: true },

  env: {
    NEXT_PUBLIC_BASEPATH: basePath,
  },
};

export default nextConfig;
