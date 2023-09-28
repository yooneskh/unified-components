import { defineConfig, presetWind, presetIcons } from 'unocss'


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
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
        px-2 py-1 rounded
        flex gap-1 items-center
        relative overflow-hidden
        interactive
        color-dark
      `,
      'interactive': `
        after:absolute after:inset-0 after:content-[""] after:bg-[var(--u-color)] after:opacity-0
        after:transition after:duration-150
        hover:after:opacity-20 active:after:opacity-30
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
  ]
});
