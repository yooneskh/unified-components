import { defineConfig, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss';
import config from '../uno.config.js';

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
