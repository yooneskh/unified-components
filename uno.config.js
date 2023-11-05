import { defineConfig, presetWind, presetIcons } from 'unocss';


// const colors = [
//   'red',
//   'green',
//   'blue',
//   'teal',
//   'black',
//   'white',
//   'dark',
//   'light',
//   'primary',
//   'secondary',
//   'success',
//   'error',
// ];

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
        flex gap-1.5 items-center shrink-0
        relative overflow-hidden
        interactive
      `,
      'interactive': `
        transition-transform hover:scale-98 active:scale-95
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
    },
  ],
  // safelist: [
  //   ...colors.map(it => `color-${it}`),
  // ]
});
