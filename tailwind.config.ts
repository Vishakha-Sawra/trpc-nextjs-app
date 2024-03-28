import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins, sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1125px',
          xl: '1125px',
          '2xl': '1125px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
