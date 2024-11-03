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

});

const emit = defineEmits([

]);

</script>


<template>
  <div class="card fill surface">

    <u-typography v-bind="props">
      <template v-if="$slots.title" #title><slot name="title" /></template>
      <template v-if="$slots.subtitle" #subtitle><slot name="subtitle" /></template>
      <template v-if="$slots.text" #text><slot name="text" /></template>
      <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
      <template v-if="$slots.append" #append><slot name="append" /></template>
    </u-typography>

    <slot />

  </div>
</template>
