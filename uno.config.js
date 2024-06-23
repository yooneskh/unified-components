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
  extendTheme: (theme) => {
    delete theme.colors.neutral;
    return theme
  },
  rules: [
    [
      /^text-(.+)$/,
      ([ _, color ]) => {
        return {
          'color': `var(--theme-${color})`,
        }
      }
    ],
    [
      /^bg-(.+)$/,
      ([ _, color ]) => {
        return {
          'background-color': `var(--theme-${color})`,
        }
      }
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
        relative overflow-hidden transition cursor-pointer
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition
        hover:after:bg-black/10
        active:after:bg-black/20
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
        after:hidden
        border-[2px] border-transparent
      `,
      'link': `
        bg-transparent
        text-[--u-color]
        hover:underline
        after:hidden
        border-[2px] border-transparent
      `,
      'text': `
        bg-transparent
        text-[--u-color]
        after:hidden
        border-[2px] border-transparent
      `,
    },
  ],
  safelist: [
    ...['fill', 'outline', 'soft', 'ghost', 'link', 'text'], // variants
    ...['interactive'], // others
  ],
});
