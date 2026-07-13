import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/IGNE" : "",
  },
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/IGNE",
        assetPrefix: "/IGNE/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
