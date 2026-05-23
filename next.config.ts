const repo = "principia-statistica-web";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  basePath: process.env.NODE_ENV === "production"
    ? `/${repo}`
    : "",

  assetPrefix: process.env.NODE_ENV === "production"
    ? `/${repo}/`
    : "",
};

export default nextConfig;
