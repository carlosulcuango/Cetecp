import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sin esto, la clase font-sans usa la fuente del sistema y la
        // tipografía cargada desde Google Fonts nunca se aplica
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3eae3',
          200: '#c9d7c9',
          300: '#a5baa5',
          400: '#7f9b7f',
          500: '#5a7a5a',
          600: '#466246',
          700: '#384f38',
          800: '#2d3f2d',
          900: '#243324',
        },
        slateCustom: {
          50: '#f8fafc',
          100: '#f1f5f9',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        warmCream: '#faf8f5',
      },
    },
  },
  plugins: [animate],
}

