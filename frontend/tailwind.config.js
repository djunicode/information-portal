/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      bggrey: '#EAECF0',
      lgreen: '#B5EAD7',
      dgreen: '#115C6C',
      black: '#000000',
      red: '#F41717',
      navgrey: "#8A92A6",
     },
     fontFamily: {
      ubuntu: "'Ubuntu', sans-serif",
      inter: "'Inter', sans-serif",
     },
     screens: {
      'mobile': '0px',
      'tablet': '640px',
      'laptop': '1024px',
     },
    extend: {},
  },
  plugins: [],
}

