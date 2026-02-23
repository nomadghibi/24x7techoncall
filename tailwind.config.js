import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Ensure JIT mode is enabled for efficient CSS generation
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend the default Tailwind theme with your custom styles
      colors: {
        primary: '#1d4ed8', // Custom primary color
        secondary: '#9333ea', // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
      spacing: {
        '128': '32rem', // Custom spacing value (e.g., 128 for 32rem)
      },
      screens: {
        'xs': '480px', // Custom responsive breakpoint
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
    forms,
  ],
}
