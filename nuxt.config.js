

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  modules: [
    '@vueuse/nuxt',
    'nuxt-radash',
  ],
  radash: {
    prefix: false,
    prefixSkip: false,
    upperAfterPrefix: false,
    alias: [
      ['try', 'radashTry'],
    ],
  },
});
