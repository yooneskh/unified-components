import { defineConfig, presetWind, presetIcons } from 'unocss';


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.1,
    }),
  ],
  rules: [
    [
      /^color-(\w+)-?(\d+)?$/,
      ([ _, color, variant ], { theme }) => ({
        '--u-color': theme.colors[color]?.[variant || 'DEFAULT'] || color
      }),
    ],
  ],
  shortcuts: [
    {
      'btn': `
        px-0.85em py-0.5em rounded-md
        flex gap-1.5 items-center shrink-0
        relative overflow-hidden
        interactive
        color-dark
      `,
      'interactive': `
        transition-transform hover:scale-98 active:scale-95
      `,
      'outline': `
        bg-transparent
        border-2px border-[var(--u-color)]
        text-[var(--u-color)]
      `,
      'fill': `
        bg-[var(--u-color)]
        text-white
      `,
    },
  ],
});
