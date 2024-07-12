/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        gray200: '#E5E0DF',
        gray300: '#CAC5C4',
        gray400: '#ADA8A8',
        gray500: '#8F8B8B',
        gray900: '#272525',
        'moon-400': '#97BFC8',
        'primary-700': '#18908D',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
