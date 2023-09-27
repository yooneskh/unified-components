import { defineConfig, presetWind, presetIcons } from 'unocss'
import { shortcuts } from './lib/shortcuts';


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
  ],
  shortcuts,
});
