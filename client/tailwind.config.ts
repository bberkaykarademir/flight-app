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
        primary: {
          DEFAULT: "#501A93",
          light: "#E6DFEA",
        },
        text: {
          DEFAULT: "#000000",
          light: "#333333",
          muted: "#B5B5B5",
          inverse: "#FFFFFF",
        },
        background: {
          DEFAULT: "#F5F3F7",
          light: "#FEFEFE",
        },
        accent: {
          DEFAULT: "#22157A",
          light: "#712AA4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
