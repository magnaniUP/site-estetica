/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#EF2A74',
          'pink-hover': '#D91D65',
          'pink-active': '#C41557',
          'pink-light': '#FCE8EE',
          'pink-subtle': '#FFF5F8',
          'header-bg': '#FCF3F5',
          slate: '#4B5E76',
          'slate-dark': '#2E384D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'soft-header': '0 1px 3px 0 rgba(239, 42, 116, 0.05)',
      }
    },
  },
  plugins: [],
}

