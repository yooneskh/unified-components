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
  shortcuts: [
    {
      'btn': `
        px-[0.85em] py-[0.5em] rounded-md
        inline-flex gap-[6px] items-center shrink-0
        relative overflow-hidden
        interactive
        disabled:opacity-60 disabled:cursor-not-allowed
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
      'input-container': `
        border border-2
        focus-within:border-primary transition-border
        rounded-md
        block w-full
        flex items-center
      `,
      'input-element': `
        border-none rounded-none outline-none
        bg-transparent
        py-[0.4em] px-[0.7em]
        w-full
        block
        disabled:opacity-60 disabled:cursor-not-allowed
      `,
      'input-textarea': `
        border border-2 outline-none
        focus-within:border-primary transition-border
        bg-transparent
        rounded-md
        py-[0.4em] px-[0.7em]
        w-full
        block
        disabled:opacity-60 disabled:cursor-not-allowed
      `,
      'interactive': `
        relative overflow-hidden transition cursor-pointer
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition
        hover:enabled:after:bg-black/10
        active:enabled:after:bg-black/20
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
        hover:enabled:bg-[color-mix(in_srgb,var(--u-color)_20%,transparent)]
        active:enabled:bg-[color-mix(in_srgb,var(--u-color)_30%,transparent)]
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
    ...['interactive'], // others
  ],
});
