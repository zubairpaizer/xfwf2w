/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ejs,html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {},
      keyframes: {},
      colors: {
        darkorange: '#F7A326',
        orange: "#f7a325",
        brown: '#7A2714',
        lbrown: "#c88827",
        ybrown: '#fcc837',
        lyellow: '#feeab9',
        gray: '#EDDAAD'
      },
      fontSize: {},
    },
  },
  plugins: [],
};
