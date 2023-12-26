/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxxsm': {'min': '320px'},
        'xxsm': {'min': '321px', 'max': '480px'},
        'xsm': {'min': '481px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      colors: {

        // Main ones
        'washed-purple': '#B6B2FF',
        'washed-blue': '#6889FF',
        'primary-blue': '#0469FF',
        'primary-purple': '7000FF',
        'neutrals': '#030014',

        // Washed purple variants
        'washed-purple-50': '#f8f7ff',
        'washed-purple-100': '#e8e7ff',
        'washed-purple-200': '#dddcff',
        'washed-purple-300': '#cecbff',
        'washed-purple-400': '#c5c1ff',
        'washed-purple-500': '#b6b2ff',
        'washed-purple-600': '#a6a2e8',
        'washed-purple-700': '#817eb5',
        'washed-purple-800': '#64628c',
        'washed-purple-900': '#4c4b6b',

        // Washed blue variants
        'washed-blue-50': '#f0f3ff',
        'washed-blue-100': '#d0daff',
        'washed-blue-200': '#bac9ff',
        'washed-blue-300': '#9ab0ff',
        'washed-blue-400': '#86a1ff',
        'washed-blue-500': '#6889ff',
        'washed-blue-600': '#5f7de8',
        'washed-blue-700': '#4a61b5',
        'washed-blue-800': '#394b8c',
        'washed-blue-900': '#2c3a6b',

        // Primary blue variants
        'primary-blue-50': '#e6f0ff',
        'primary-blue-100': '#b2d1ff',
        'primary-blue-200': '#8cbaff',
        'primary-blue-300': '#589bff',
        'primary-blue-400': '#3787ff',
        'primary-blue-500': '#0569ff',
        'primary-blue-600': '#0560e8',
        'primary-blue-700': '#044bb5',
        'primary-blue-800': '#033a8c',
        'primary-blue-900': '#022c6b',

        // Primary purple
        'primary-purple-50': '#f1e6ff',
        'primary-purple-100': '#d3b0ff',
        'primary-purple-200': '#bd8aff',
        'primary-purple-300': '#9f54ff',
        'primary-purple-400': '#8d33ff',
        'primary-purple-500': '#7000ff',
        'primary-purple-600': '#6600e8',
        'primary-purple-700': '#5000b5',
        'primary-purple-800': '#3e008c',
        'primary-purple-900': '#2f006b',

        // Neutrals variants 
        'neutrals-1' : '#ffffff',
        'neutrals-2' : '#fcfcfd',
        'neutrals-3' : '#f5f5f6',
        'neutrals-4' : '#f0f0f1',
        'neutrals-5' : '#d9d9dc',
        'neutrals-6' : '#c0bfc4',
        'neutrals-7' : '#8d8c95',
        'neutrals-8' : '#5b5966',
        'neutrals-9' : '#464553',
        'neutrals-10' : '#282637',
        'neutrals-11' : '#201f30',
        'neutrals-12' : '#161427',
        'neutrals-13' : '#020014',
      },
      fontFamily: {
        poppins: ['"Poppins"'],
      }
    },
  },
  plugins: [],
}