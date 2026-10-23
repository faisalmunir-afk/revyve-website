import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: gives a real index.html per route for inspect.mjs to open,
  // and deploys anywhere.
  output: "export",
  // The live site's URLs all end in a slash; keep them for SEO parity.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
