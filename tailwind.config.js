const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'back': '#EEEDDE',
        'header': '#203239',
        'plus' : '#FF7527',
      },
      fontFamily: {
        'Pop': ['Poppins', 'sans-serif'],
        
      },
      zIndex: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [require("limbcss")],
}

