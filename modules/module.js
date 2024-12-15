import { defineNuxtModule, installModule } from 'nuxt/kit';


export default defineNuxtModule({
  meta: {
    name: 'unified-components-module',
    configKey: 'unifiedComponents',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup: (options, nuxt) => {
    
    const themeObj = Object.assign(options.theme || {}, {

      /* contextual */

      'neutral': '#212121',
      'on-neutral': '#FAFAFA',
      'primary': '#409EFF',
      'on-primary': '#FAFAFA',
      'success': '#67C23A',
      'on-success': '#FAFAFA',
      'warning': '#E6A23C',
      'on-warning': '#FAFAFA',
      'danger': '#F56C6C',
      'on-danger': '#FAFAFA',

      /* utility */

      'surface': '#FAFAFA',
      'on-surface': '#212121',

    });

    installModule('@unocss/nuxt', {
      extendTheme: (theme) => {
        Object.assign(theme.colors, themeObj);
      }
    });

    nuxt.options.runtimeConfig.public.unifiedComponentsTheme = themeObj;

  },
});
