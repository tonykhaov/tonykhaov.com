const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        rose: colors.rose,
        pink: colors.pink,
        fuschia: colors.fuschia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        gray: colors.gray,
        'cool-gray': colors.coolGray,
        'blue-gray': colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
