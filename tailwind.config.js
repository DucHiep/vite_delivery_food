/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black1: '#212245',
      red1: '#df2020',
      pink1: '#fde4e4',
      white: '#fff'
    },
    extend: {
      height: {
        25: '100px'
      },
      lineHeight: {
        25: '100px'
      }
    }
  },
  plugins: []
}
