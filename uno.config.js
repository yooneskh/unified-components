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
        px-[0.85em] py-[0.5em] rounded-lg
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
        px-[0.85em] py-[0.2em] rounded-full
        inline-flex gap-[6px] items-center shrink-0
        relative overflow-hidden
      `,
      'chip-start-icon': `
        ps-[0.4em]
      `,
      'chip-end-icon': `
        pe-[0.4em]
      `,
      'chip-button': `
        text-[0.85em] rounded-full !p-[0.2em]
      `,

      'tooltip-content': `
        px-2 py-1
      `,

      'dialog-backdrop': `
        fixed top-0 left-0 h-full w-full
        bg-black/15
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
        rounded-lg
        border shadow
      `,

      'alert': `
        py-[0.5em] px-[1em]
        rounded-lg
      `,

      'input-container': `
        border border-2
        focus-within:border-primary transition-border
        rounded-lg
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
        rounded-lg
        py-[0.4em] px-[0.7em]
        w-full
        block
        disabled:opacity-50 disabled:cursor-not-allowed
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
        border-1 border-[--u-color]
      `,
      'outline': `
        bg-transparent
        border-1 border-[--u-color]
        text-[--u-color]
      `,
      'soft': `
        bg-[color-mix(in_srgb,var(--u-color)_15%,transparent)]
        text-[--u-color]
        border-1 border-transparent
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
