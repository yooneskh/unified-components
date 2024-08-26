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
        px-[0.85em] py-[0.5em]
        inline-flex gap-[6px] items-center shrink-0
        relative overflow-hidden
        interactive
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
      'btn-icon-only': `
        px-[0.5em]
      `,
      'btn-loader': `
        absolute inset-0
        flex items-center justify-center
        bg-white/50
      `,

      'chip': `
        px-[0.85em] py-[0.2em]
        inline-flex gap-[0.4em] items-center shrink-0
        relative overflow-hidden
      `,
      'chip-start-icon': `
        ps-[0.2em]
      `,
      'chip-end-icon': `
        pe-[0.2em]
      `,
      'chip-button': `
        text-[0.85em] !p-[0.2em]
      `,

      'tooltip-content': `
        px-2 py-1
      `,

      'dialog-backdrop': `
        fixed top-0 left-0 h-full w-full
        bg-neutral/15
        flex items-center justify-center cursor-pointer
        p-4
      `,
      'dialog-container': `
        cursor-auto
        max-w-full
        max-h-full
        overflow-auto
      `,

      'card': `
        p-[0.75em]
        border shadow
      `,

      'alert': `
        py-[0.5em] px-[1em]
      `,

      'input-container': `
        border border-2
        focus-within:border-primary transition-border
        block w-full
        flex items-center
      `,
      'input-element': `
        border-none rounded-none outline-none
        bg-transparent
        py-[0.4em] px-[0.7em]
        w-full
        block
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
      'input-textarea': `
        border border-2 outline-none
        focus-within:border-primary transition-border
        bg-transparent
        py-[0.4em] px-[0.7em]
        w-full
        block
        disabled:opacity-50 disabled:cursor-not-allowed
      `,

      'interactive': `
        relative overflow-hidden transition cursor-pointer
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition after:bg-[--u-on-color] after:opacity-0
        hover:after:opacity-10
        active:after:opacity-20
      `,

      'fill': `
        bg-[--u-color]
        text-[--u-on-color]
        border-1 border-[--u-color]
      `,
      'outline': `
        bg-transparent
        border-1 border-[--u-color]
        text-[--u-color]
        after:bg-[--u-color]
      `,
      'soft': `
        bg-[color-mix(in_srgb,var(--u-color)_15%,transparent)]
        text-[--u-color]
        border-1 border-transparent
        after:bg-[--u-color]
      `,
      'ghost': `
        bg-[color-mix(in_srgb,var(--u-color)_0%,transparent)]
        text-[--u-color]
        transition
        hover:bg-[color-mix(in_srgb,var(--u-color)_20%,transparent)]
        active:bg-[color-mix(in_srgb,var(--u-color)_30%,transparent)]
        after:hidden
        border-1 border-transparent
      `,
      'link': `
        bg-transparent
        text-[--u-color]
        hover:underline
        after:hidden
        border-1 border-transparent
      `,
      'text': `
        bg-transparent
        text-[--u-color]
        after:hidden
        border-1 border-transparent
      `,

    },
  ],
});
