
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    fontFamily:{
      jersy:["Jersey 15"]
    },
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        jersy: ["Caveat Brush", "Jersey 15"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        'ping-short': 'tw-ping 1s cubic-bezier(0, 0, 0.2, 1) ease-in-out 5'
      },
      colors: {
        primary: {
          DEFAULT: '#e59d76',
          dark: '#3A9B73',
          light: '#82EDBC'
        },
        secondary: {
          DEFAULT: '#4ccd99',
          dark: '#c43e00',
          light: '#ff7a38'
        },
        neutral: {
          dark: '#333333',
          medium: '#666666',
          light: '#f7f7f7'
        }
      }
    },
    screens:{
      'ngl':'958px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
