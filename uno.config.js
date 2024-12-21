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

      'alert': `
        py-[0.5em] px-[1em]
        rounded
      `,

      'btn': `
        px-[1em] py-[0.5em]
        rounded
        inline-flex gap-[0.5em] items-center shrink-0
        relative overflow-clip
        interactive
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
      'btn-icon-only': `
        px-[0.5em]
      `,
      'btn-loader': `
        absolute inset-0
        flex items-center justify-center
        bg-on-neutral/50
      `,

      'card': `
        p-[0.75em]
        rounded
      `,

      'chip': `
        px-[0.75em] py-[0.25em]
        rounded
        inline-flex gap-[0.5em] items-center shrink-0
        relative overflow-clip
      `,
      'chip-start-icon': `
        ps-[0.5em]
      `,
      'chip-end-icon': `
        pe-[0.5em]
      `,
      'chip-button': `
        text-[0.75em] !p-[0.25em]
      `,

      'dialog-backdrop': `
        fixed top-0 left-0 h-screen w-screen
        bg-on-surface/25
        flex items-center justify-center cursor-pointer
        p-4
      `,
      'dialog-container': `
        cursor-auto
        max-w-full
        max-h-full
        overflow-auto
      `,

      'tooltip-content': `
        px-[0.5em] py-[0.25em]
      `,

      'input-container': `
        border border-black/15
        rounded
        focus-within:(border-primary ring-1 ring-primary) transition-border
        block w-full
        flex items-center
      `,
      'input-element': `
        border-none rounded-none outline-none
        bg-transparent
        py-[0.25em] px-[0.5em]
        w-full
        block
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
      'input-textarea': `
        border border-black/15 outline-none
        rounded
        focus-within:(border-primary ring-1 ring-primary) transition-border
        bg-transparent
        py-[0.25em] px-[0.5em]
        w-full
        block
        disabled:opacity-50 disabled:cursor-not-allowed
      `,

      'interactive': `
        relative overflow-clip transition cursor-pointer
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition after:bg-[--u-on-color] after:opacity-0
        hover:after:opacity-10
        active:after:opacity-20
      `,

      'fill': `
        bg-[--u-color]
        text-[--u-on-color]
        border border-[--u-color]
      `,
      'raise': `
        bg-[--u-color]
        text-[--u-on-color]
        border border-[rgb(from_var(--u-on-color)_r_g_b_/_15%)]
        shadow
      `,
      'outline': `
        bg-transparent
        border border-[--u-color]
        text-[--u-color]
        after:bg-[--u-color]
      `,
      'soft': `
        bg-[color-mix(in_srgb,var(--u-color)_15%,transparent)]
        text-[--u-color]
        border border-transparent
        after:bg-[--u-color]
      `,
      'ghost': `
        bg-[color-mix(in_srgb,var(--u-color)_0%,transparent)]
        text-[--u-color]
        transition
        hover:bg-[color-mix(in_srgb,var(--u-color)_20%,transparent)]
        active:bg-[color-mix(in_srgb,var(--u-color)_30%,transparent)]
        after:hidden
        border border-transparent
      `,
      'link': `
        bg-transparent
        text-[--u-color]
        hover:underline
        after:hidden
        border border-transparent
      `,
      'text': `
        bg-transparent
        text-[--u-color]
        after:hidden
        border border-transparent
      `,

    },
  ],
});
