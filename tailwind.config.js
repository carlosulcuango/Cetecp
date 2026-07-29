/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3eae3',
          500: '#5a7a5a',
          600: '#466246',
          700: '#384f38',
        },
        slateCustom: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
        },
        warmCream: '#faf8f5',
      },
    },
  },
  plugins: [],
}

