/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(75, 94%, 57%)', // yellow
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        'off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

