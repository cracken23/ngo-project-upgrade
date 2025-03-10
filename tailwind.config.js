/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      jersy:["Jersey 15"]
    },
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        jersy: ["Caveat Brush", "Jersey 15"],

      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-short': 'tw-ping 1s cubic-bezier(0, 0, 0.2, 1)  ease-in-out 5'
      }
    },
    screens:{
      'ngl':'958px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

