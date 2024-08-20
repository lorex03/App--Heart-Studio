/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cc8af2',
        secondary: '#b73aff'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

