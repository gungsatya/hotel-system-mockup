import { fontFamily } from "tailwindcss/defaultTheme.js";

/**** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans]
      },
      colors: {
        brand: {
          50: "#f2f6ff",
          100: "#e2ecff",
          200: "#c1d5ff",
          300: "#99b7ff",
          400: "#6f8eff",
          500: "#4663ff",
          600: "#2d43e6",
          700: "#2133b4",
          800: "#1e2d8a",
          900: "#1c2a6d"
        }
      }
    }
  },
  plugins: []
};

export default config;
