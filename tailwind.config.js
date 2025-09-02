/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'rgba(255, 255, 255, 0.6)',
          200: 'rgba(255, 255, 255, 0.4)',
          300: 'rgba(255, 255, 255, 0.5)',
          400: 'rgba(255, 255, 255, 0.3)',
          500: 'rgba(0, 0, 0, 0.11)'
        },
        white: '#fff',
        ghostwhite: '#f2f4ff',
        lavender: '#ededff',
        snow: {
          100: '#fffafa',
          200: '#fff7f7'
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
