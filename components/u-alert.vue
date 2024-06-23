<script setup>

/* interface */

const props = defineProps({

  title: {
    type: String,
    default: undefined,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  appendIcon: {
    type: String,
    default: undefined,
  },
  titleClasses: {
    type: String,
    default: undefined,
  },
  subtitleClasses: {
    type: String,
    default: undefined,
  },
  textClasses: {
    type: String,
    default: undefined,
  },
  iconClasses: {
    type: String,
    default: undefined,
  },
  appendIconClasses: {
    type: String,
    default: undefined,
  },

  variant: {
    type: String,
    default: 'fill',
  },
  color: {
    type: String,
    default: 'neutral',
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <div
    class="alert"
    :class="[ props.variant ]"
    :style="[
      props.color && `--u-color: var(--theme-${props.color}); --u-on-color: var(--theme-on-${props.color})`,
    ]">

    <u-typography v-bind="props" interchange-text>
      <template v-if="$slots.title" #title><slot name="title" /></template>
      <template v-if="$slots.subtitle" #subtitle><slot name="subtitle" /></template>
      <template v-if="$slots.text" #text><slot name="text" /></template>
      <template v-if="$slots.append" #append><slot name="append" /></template>
      <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
    </u-typography>

    <slot />

  </div>
</template>
