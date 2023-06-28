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
        brand: {
          50: '#F4FFF8',
          100: '#DFF9ED',
          200: '#B6ECD5',
          300: '#93DFBC',
          400: '#6DD09D',
          500: '#5CBB8A',
          600: '#48956D',
          700: '#3D7F5D',
          800: '#28553E',
          900: '#132A1F',
        },
      },
    },
  },
  plugins: [],
}
