# Unified Components
## How to use

1- Install

```bash
bun i unified-components --exact
```

2- Configure

`uno.config.js`

```js
import { defineConfig } from 'unocss';
import preset from 'unified-components/uno.config.js';


export default defineConfig({
  presets: [
    preset,
  ],
});
```

`nuxt.config.js`

```js
export default defineNuxtConfig({
  extends: [
    'unified-components',
  ],
});
```

`app.vue`

```html
<style>
  :root {
    --theme-neutral: #212121;
    --theme-on-neutral: #FAFAFA;
    --theme-primary: #3B82F6;
    --theme-on-primary: #FAFAFA;
    --theme-secondary: #2DD4BF;
    --theme-on-secondary: #212121;
    --theme-success: #22C55E;
    --theme-on-success: #212121;
    --theme-error: #EF4444;
    --theme-on-error: #212121;
  }
</style>
```
