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
    
    installModule('@unocss/nuxt', {
      extendTheme: (theme) => {
        if (options.theme) {
          Object.assign(theme.colors, options.theme);
        }
      }
    });

    if (options.theme) {
      nuxt.options.runtimeConfig.public.unifiedComponentsTheme = options.theme;
    }

  },
});
