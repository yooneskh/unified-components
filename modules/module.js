import { defineNuxtModule, installModule, addPluginTemplate } from 'nuxt/kit';


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

    addPluginTemplate({
      filename: 'virtual-unified-components-colors.js',
      write: false,
      getContents: () => {
        return `
          export default defineNuxtPlugin(nuxt => {
            useHead({
              style: ':root { ${Object.entries(options.theme).map(it => `--theme-${it[0]}: ${it[1]};`).join(' ')} } ${Object.keys(options.theme).filter(it => !it.startsWith('on')).map(it => `.${it} { --u-color: var(--theme-${it}); --u-on-color: var(--theme-on-${it}); }`).join(' ')}',
            });
          });
        `;
      },
    });

  },
});
