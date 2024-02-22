import { defineConfig, presetWind, presetIcons } from 'unocss';


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.1,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
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
        px-[0.85em] py-[0.5em] rounded-md
        inline-flex gap-1.5 items-center shrink-0
        relative overflow-hidden
        interactive
      `,
      'btn-icon-only': `
        px-0.5em
      `,
      'chip': `
        px-[0.85em] py-[-0.5em] rounded-full
        inline-flex gap-1.5 items-center shrink-0
        relative overflow-hidden
      `,
      'interactive': `
        transition-transform active:scale-95
      `,
      'fill': `
        bg-[--u-color]
        text-white
        border-2px border-[--u-color]
      `,
      'outline': `
        bg-transparent
        border-2px border-[--u-color]
        text-[--u-color]
      `,
      'soft': `
        bg-transparent
        text-[--u-color]
        before:absolute before:inset-0 before:content-[""] before:bg-[--u-color] before:opacity-15
        border-2px border-[color-mix(in_srgb,var(--u-color)_15%,transparent)]
      `,
      'ghost': `
        bg-transparent
        text-[--u-color]
        transition
        before:absolute before:inset-0 before:content-[""] before:bg-[--u-color] before:opacity-0
        before:transition before:duration-150
        hover:before:opacity-20 active:before:opacity-30
        border-2px border-transparent hover:border-[color-mix(in_srgb,var(--u-color)_20%,transparent)] active:border-[color-mix(in_srgb,var(--u-color)_30%,transparent)]
      `,
      'link': `
        bg-transparent
        text-[--u-color]
        hover:underline
        border-2px border-transparent
      `,
      'text': `
        bg-transparent
        text-[--u-color]
        border-2px border-transparent
      `,
    },
  ],
});
