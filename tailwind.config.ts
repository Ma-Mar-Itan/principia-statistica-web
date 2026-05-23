import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}", "./content/**/*.{mdx,ts}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "4px"
      }
    }
  }
};

export default config;
