/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['"Caveat"', 'cursive'],
        'fraunces': ['"Fraunces"'],
      },
      colors: {
        'theme-orange': '#B94D43',
        'dark-theme-orange': '#FF9D80',
        'theme-green': '#1A4338',
        'dark-theme-green': '#A4CE85',
        'theme-purple': '#4F3BA0',
        'dark-theme-purple': '#BBB1E2',
      },
    },
  },
  plugins: [],
}

