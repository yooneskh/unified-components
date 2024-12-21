<script setup>

import { smartClassMerge } from '../libs/smart-class-merge.ts';


/* interface */

const props = defineProps({

  class: {
    type: String,
  },

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

});


/* typography */

const typographyProps = reactiveOmit(props, 'class');

</script>


<template>
  <div :class="smartClassMerge('alert fill neutral', props.class)">

    <u-typography v-bind="typographyProps" interchange-text>
      <template v-if="$slots.title" #title><slot name="title" /></template>
      <template v-if="$slots.subtitle" #subtitle><slot name="subtitle" /></template>
      <template v-if="$slots.text" #text><slot name="text" /></template>
      <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
      <template v-if="$slots.append" #append><slot name="append" /></template>
    </u-typography>

    <slot />

  </div>
</template>
