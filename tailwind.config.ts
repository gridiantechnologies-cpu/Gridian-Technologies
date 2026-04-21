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
        cobalt: {
          DEFAULT: "#0047AB",
          50: "#EBF0FB",
          100: "#C2D2F5",
          200: "#99B4EF",
          300: "#7096E9",
          400: "#4778E3",
          500: "#0047AB",
          600: "#003A8C",
          700: "#002D6E",
          800: "#002060",
          900: "#001340",
        },
      },
      fontFamily: {
        inter: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      backdropBlur: {
        glass: "10px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
