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

          info: "#87b1d9",

          success: "#1d875c",

          warning: "#957c0f",

          error: "#fb4e37",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
