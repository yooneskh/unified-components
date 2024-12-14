

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  extends: [
    'nuxt-unified-confetti',
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  modules: [
    '@vueuse/nuxt',
    'nuxt-radash',
  ],
  radash: {
    prefix: 'rad',
    prefixSkip: false,
  },
});
