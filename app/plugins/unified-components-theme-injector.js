

export default defineNuxtPlugin(() => {

  const theme = useRuntimeConfig().public.unifiedComponentsTheme;

  if (theme) {
    useHead({
      style: `:root { ${Object.entries(theme).map(it => `--theme-${it[0]}: ${it[1]};`).join(' ')} } ${Object.keys(theme).filter(it => !it.startsWith('on')).map(it => `.${it} { --u-color: var(--theme-${it}); --u-on-color: var(--theme-on-${it}); }`).join(' ')}`,
    });
  }

});