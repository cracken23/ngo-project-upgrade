
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
        'ping-short': 'tw-ping 1s cubic-bezier(0, 0, 0.2, 1) ease-in-out 5',
        'fade-in': 'tw-fadeIn 0.5s ease-in-out forwards',
        'slide-in': 'tw-slideIn 0.5s ease-in-out forwards',
        'slide-up': 'tw-slideUp 0.5s ease-in-out forwards',
        'zoom-in': 'tw-zoomIn 0.3s ease-in-out forwards',
        'bounce-light': 'tw-bounce 1s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      colors: {
        primary: {
          DEFAULT: '#e59d76',
          dark: '#d78957',
          light: '#f3c7af'
        },
        secondary: {
          DEFAULT: '#4ccd99',
          dark: '#3ba57a',
          light: '#7ee2bc'
        },
        neutral: {
          dark: '#333333',
          medium: '#666666',
          light: '#f7f7f7'
        }
      },
      boxShadow: {
        'smooth': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
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
