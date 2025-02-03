// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'bg-zinc-200 text-zinc-900',
      },
      meta: [
        {
          name: 'description',
          content:
            'Michael Carillon is a full-stack web developer based in Cleveland, OH. He loves all things web development.',
        },
      ],
      title: 'Michael Carillon',
    },
  },
  compatibilityDate: '2025-01-08',
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/fontawesome.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  devtools: { enabled: true },
  gtag: {
    id: 'G-19M24G23XS',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@vueuse/nuxt', 'nuxt-gtag'],
});
