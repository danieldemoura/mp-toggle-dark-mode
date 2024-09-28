/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'moon': "url('../assets/moon.svg')",
        "sun": "url('../assets/sun.svg')" 
      },
      keyframes: {
        toRight: {
          '0%': {
            backgroundImage: "url('../assets/sun.svg')",
            backgroundColor:  'bg-zinc-100'
          },
          '100%': { 
            transform: 'translateX(calc(100% - 12px)) rotate(360deg)',
            backgroundImage: "url('../assets/moon.svg')",
            backgroundColor:  'bg-zinc-800'
          },
        },
        toLeft: {
          '0%': { 
            transform: 'translateX(calc(100% - 12px)) rotate(360deg)',
            backgroundImage: "url('../assets/moon.svg')",
          },
          '100%': { 
            transform: 'translateX(calc(0%)) rotate(0deg)',
            backgroundImage: "url('../assets/sun.svg')",
          },
        }
      },
      animation: {
        'toRight': 'toRight .7s ease-in-out forwards',
        'toLeft': 'toLeft .7s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

