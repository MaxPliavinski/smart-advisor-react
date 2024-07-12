/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        gray300: '#CAC5C4',
        gray400: '#ADA8A8',
        'moon-400': '#97BFC8',
        'primary-700': '#18908D',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
