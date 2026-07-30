import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 📌 아래 두 줄을 새로 추가합니다.
  basePath: "/my-website",
  assetPrefix: "/my-website/",
};

export default nextConfig;
