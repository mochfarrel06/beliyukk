/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        reemkufi: ['Reem Kufi'],
      },
    },
    colors: {
      c1: '#3FA3FF',
      c2: '#75BCFE',
      c3: '#BFE0FF',
      c4: '#15436F',
      c5: '#FF1577',
      c6: '#ffffff',
    },
  },
  plugins: [],
};
