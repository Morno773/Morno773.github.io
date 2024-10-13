import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(242, 39, 84, 0.35)",
          "0 0px 65px rgba(242, 39, 84, 0.2)"
        ]
      },
      screens: {
        "min-mobile": "760px",
        "mobile": {'max': '760px'},
      },
    },
  },
  plugins: [],
};
export default config;
