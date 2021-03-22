module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // ex. colors: {orange: ##F59E0B} will replace all of the default 'color' values
    extend: {
      colors: {
        orange: '#2563EB'
      }
      // same colors example would add a new color in addition to the default colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}