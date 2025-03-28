import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      BtnColor: "#0095F6",
      LinkColor: "#00376B",
      TextColor: "#737373",
      ErrorColor: "#FF3040",
      InputBorderColor: "#DBDBDB",
      InputBgColor: "#FAFAFA",
      TextWhite: "#FFFFFF",
      TextBlack: "#000000",
    },
    screens: {
      sm: "460px",
      ht:"800px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
