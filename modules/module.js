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
    
    const themeObj = options.theme || {
      'surface': '#FAFAFA',
      'on-surface': '#212121',
      'neutral': '#212121',
      'on-neutral': '#FAFAFA',
      'primary': '#3B82F6',
      'on-primary': '#FAFAFA',
      'success': '#22C55E',
      'on-success': '#212121',
      'danger': '#EF4444',
      'on-danger': '#212121',
    };

    installModule('@unocss/nuxt', {
      extendTheme: (theme) => {
        Object.assign(theme.colors, themeObj);
      }
    });

    nuxt.options.runtimeConfig.public.unifiedComponentsTheme = themeObj;

  },
});
