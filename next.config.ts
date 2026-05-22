import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure the gated essay JSON (kept outside src/ so it's never client-bundled)
  // is copied into the standalone server output.
  outputFileTracingIncludes: {
    "/api/allegations/**": ["./server-content/**/*"],
  },
};

export default nextConfig;
