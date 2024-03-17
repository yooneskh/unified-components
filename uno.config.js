import { defineConfig, presetWind, presetIcons } from 'unocss';


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.05,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  rules: [
    [
      /^u-color-(\w+)$/,
      ([ _, color ], { theme }) => {
        if (theme.colors[color]) {
          return {
            '--u-color': theme?.colors?.[color],
            '--u-on-color': theme?.colors?.['on-' + color],
          };
        }
      },
    ],
  ],
  shortcuts: [
    {
      'btn': `
        px-[0.85em] py-[0.5em] rounded-md
        inline-flex gap-[6px] items-center shrink-0
        relative overflow-hidden
        interactive
      `,
      'btn-icon-only': `
        px-[0.5em]
      `,
      'chip': `
        px-[0.85em] py-[0.2em] rounded-full
        inline-flex gap-[6px] items-center shrink-0
        relative overflow-hidden
      `,
      'card': `
        p-[0.75em]
        rounded-md
        border shadow
      `,
      'alert': `
        py-[0.5em] px-[1em]
        rounded-lg
        border
      `,
      'interactive': `
        transition-transform active:scale-95
        cursor-pointer
      `,
      'fill': `
        bg-[--u-color]
        text-[--u-on-color]
        border-[2px] border-[--u-color]
      `,
      'outline': `
        bg-transparent
        border-[2px] border-[--u-color]
        text-[--u-color]
      `,
      'soft': `
        bg-[color-mix(in_srgb,var(--u-color)_15%,transparent)]
        text-[--u-color]
        border-[2px] border-transparent
      `,
      'ghost': `
        bg-[color-mix(in_srgb,var(--u-color)_0%,transparent)]
        text-[--u-color]
        transition
        hover:bg-[color-mix(in_srgb,var(--u-color)_20%,transparent)]
        active:bg-[color-mix(in_srgb,var(--u-color)_30%,transparent)]
        border-[2px] border-transparent
      `,
      'link': `
        bg-transparent
        text-[--u-color]
        hover:underline
        border-[2px] border-transparent
      `,
      'text': `
        bg-transparent
        text-[--u-color]
        border-[2px] border-transparent
      `,
    },
  ],
  safelist: [
    ...['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'error'].map(it => `u-color-${it}`), // colors
    ...['fill', 'outline', 'soft', 'ghost', 'link', 'text'], // variants
    ...['interactive'], // others
  ],
});
