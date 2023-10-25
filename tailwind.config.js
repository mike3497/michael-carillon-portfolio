/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
