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
          "gradient-color-from": "#fdeff9",
          "gradien-color-to": "#03001e",
          "gradient-color-via":"#ec38bc",
          "gradient-color-via-2":"#7303c0",
          "bg-color":"#111117",
          "color-text-accent": "#b0b7cb",
          "color-text": "#71799b",
          "header": "rgba(28,29,36,0.6)",
          'secondary':"#20202a",
          "form-color": "#2e2f3a",
          "opacity-secondary":" rgba(32,32,42)",
          },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin:{
          '16':"16px"
      }
    },
  },
  plugins: [],
};
export default config;
