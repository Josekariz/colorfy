import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6af2a3",

          secondary: "#dddb3e",

          accent: "#8efbff",

          neutral: "#282f39",

          "base-100": "#ffffff",

          info: "#2563eb",

          success: "#16a34a",

          warning: "#ef4444",

          error: "#fb4e37",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
