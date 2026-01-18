import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === "GH_PAGES";
const repo = process.env.REPO_NAME ?? "";

const nextConfig: NextConfig = {
  output: "export", 
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  images: { unoptimized: true }, 
};

export default nextConfig;



