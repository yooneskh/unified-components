

export default defineNuxtConfig({
  compatibilityDate: '2024-07-27',
  future: {
    compatibilityVersion: 4,
  },
  extends: [
    '../',
  ],
  unifiedComponents: {
    theme: {
      'surface': '#FAFAFA',
      'on-surface': '#212121',
      'neutral': '#212121',
      'on-neutral': '#FAFAFA',
      'primary': '#3B82F6',
      'on-primary': '#FAFAFA',
      'secondary': '#2DD4BF',
      'on-secondary': '#212121',
      'success': '#22C55E',
      'on-success': '#212121',
      'danger': '#EF4444',
      'on-danger': '#212121',
    },
  },
});
