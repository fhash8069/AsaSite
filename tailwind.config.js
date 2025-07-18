/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        burgundy: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        maroon: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d5d5',
          300: '#f4b5b5',
          400: '#ec8b8b',
          500: '#e06666',
          600: '#cd4f4f',
          700: '#ab3d3d',
          800: '#8e3535',
          900: '#762f2f',
          950: '#3f1515',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        earthBrown: {
          50: '#faf7f3',
          100: '#f4ede3',
          200: '#e8d9c5',
          300: '#d9c09f',
          400: '#c8a177',
          500: '#bc8a5a',
          600: '#af744e',
          700: '#925d43',
          800: '#764c3c',
          900: '#5f3f32',
          950: '#322019',
        }
      },
    },
  },
  plugins: [],
} 