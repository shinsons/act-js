/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./mockup/*.html'],
  theme: {
    colors: {
      'gray': colors.gray,
      'white': colors.white,
      'indigo': colors.indigo,
      'red': colors.red,
      'green': colors.green,
      'orange': colors.orange,
      'blue': colors.blue
    },
  },
  plugins: [ forms, typography ]
};

