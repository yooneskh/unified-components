# Unified Components

## Capabilities

General capabilities added through UnoCSS
- [Variant groups](https://unocss.dev/transformers/variant-group)
  - `class="hover:(text-black underline)"`
- [Directives](https://unocss.dev/transformers/directives)
  - ```css
      .custom-div {
        --at-apply: "text-center my-0 font-medium";
      }
    ```
  - `@screen xs { ... }`
  - `@screen lt-lg { ... }`
  - `@screen at-lg { ... }`
  - `background-color: theme('colors.blue.500');`
- [Compile classes](https://unocss.dev/transformers/compile-class)
  - `<div class=":uno: text-center sm:text-left">...</div>`

## How to use

1- Install

```bash
bun i unified-components --exact
```

2- Configure

`~/uno.config.js`

```js
import { defineConfig, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss';
import config from 'unified-components/uno.config.js';

export default defineConfig({
  presets: [
    config,
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
```

`~/nuxt.config.js`

```js
export default defineNuxtConfig({
  extends: [
    'unified-components',
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
      'error': '#EF4444',
      'on-error': '#212121',
    },
  },
});
```

`~/app/app.vue`

```html
<style>
  :root {
    color: theme('colors.on-surface');
    background-color: theme('colors.surface');
  }
</style>
```