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
      screens: {
        xs: '100%',
        sm: '100%',
        md: '1140px',
        lg: '1140px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
