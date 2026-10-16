import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      colors: {
        ink: "#172033",
        muted: "#647084",
        line: "#e5e9ef",
        accent: "#244b82",
        paper: "#fbfcfe"
      },
      boxShadow: {
        soft: "0 16px 44px rgba(23, 32, 51, 0.06)"
      }
    }
  },
  plugins: []
};
export default config;
