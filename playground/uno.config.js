import { defineConfig } from 'unocss';
import preset from '../uno.config.js';


export default defineConfig({
  presets: [
    preset,
  ],
  theme: {
    colors: {
      'neutral': '#212121',
      'on-neutral': '#FAFAFA',
      'primary': '#3b82f6',
      'on-primary': '#FAFAFA',
      'secondary': '#2dd4bf',
      'on-secondary': '#212121',
      'success': '#22c55e',
      'on-success': '#212121',
      'error': '#ef4444',
      'on-error': '#212121',
    },
  },
});
