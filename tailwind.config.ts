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
