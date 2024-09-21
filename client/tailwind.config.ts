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
        secondary: {
          DEFAULT: "#5493f7"
        },
        text: {
          DEFAULT: "#333333",
          light: "#585858",
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
        border: {
          DEFAULT: "#DCDCDC",
        },
        placeholder: {
          DEFAULT: "#D9D9D9",
        },
      },
      height: {
        18: "72px",
        22: "88px",
        26: "104px",
        68: "272px",
      },
      width: {
        18: "72px",
        22: "88px",
        26: "104px",
        68: "272px",
      },
    },
  },
  plugins: [],
};
export default config;
