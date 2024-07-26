# Unified Components
## How to use

1- Install

```bash
bun i unified-components --exact
```

2- Configure

`/uno.config.js`

```js
import { defineConfig } from 'unocss';
import preset from 'unified-components/uno.config.js';


export default defineConfig({
  presets: [
    preset,
  ],
});
```

`/nuxt.config.js`

```js
export default defineNuxtConfig({
  extends: [
    'unified-components',
  ],
  unifiedComponents: {
    theme: {
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

