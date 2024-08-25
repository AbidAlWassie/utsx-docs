/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all JS/TS/JSX/TSX/MDX files in the pages directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all JS/TS/JSX/TSX/MDX files in the src directory
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
