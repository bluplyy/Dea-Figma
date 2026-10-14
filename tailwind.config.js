/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#D9D5C4',
        olive: '#7D7D6E',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['NATS', 'system-ui', 'sans-serif'],
        nats: ['NATS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
