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
  future: { hoverOnlyWhenSupported: true },
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
      boxShadow: {
        solid: '4px 4px 0 0 rgb(0 0 0)',
      },
      fontFamily: {
        sans: ['Roboto Mono'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: ['mb-2'],
};
