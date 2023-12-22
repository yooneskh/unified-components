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
      /^color-(\w+)$/,
      ([ _, color ]) => ({
        '--u-color': `var(--color-${color})`
      }),
    ],
  ],
  shortcuts: [
    {
      'btn': `
        px-0.85em py-0.5em rounded-md
        inline-flex gap-1.5 items-center shrink-0
        self-start
        relative overflow-hidden
        interactive
      `,
      'btn-icon-only': `
        px-0.5em
      `,
      'interactive': `
        transition-transform active:scale-95
      `,
      'fill': `
        bg-[var(--u-color)]
        text-white
      `,
      'outline': `
        bg-transparent
        border-2px border-[var(--u-color)]
        text-[var(--u-color)]
      `,
      'soft': `
        bg-transparent
        text-[var(--u-color)]
        before:absolute before:inset-0 before:content-[""] before:bg-[var(--u-color)] before:opacity-15
      `,
      'ghost': `
        bg-transparent
        text-[var(--u-color)]
        before:absolute before:inset-0 before:content-[""] before:bg-[var(--u-color)] before:opacity-0
        before:transition before:duration-150
        hover:before:opacity-20 active:before:opacity-30
      `,
      'link': `
        bg-transparent
        text-[var(--u-color)]
        hover:underline
      `,
      'text': `
        bg-transparent
        text-[var(--u-color)]
      `,
    },
  ],
});
