import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/liora",
	assetPrefix: "/liora",
	output: "export",
	reactStrictMode: true,
	images: { unoptimized: true }
};

export default nextConfig;
