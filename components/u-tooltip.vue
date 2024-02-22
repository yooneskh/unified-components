<script setup>

/* interface */

const props = defineProps({

  text: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: undefined,
  },

  refReference: {
    type: Object,
    default: undefined,
  },

  placement: {
    type: String,
    default: 'top',
  },
  strategy: {
    type: String,
    default: undefined,
  },

  trigger: {
    type: String,
    default: 'hover',
  },
  persist: {
    type: [Boolean, String],
    default: undefined,
  },

  offset: {
    type: [Number, String],
    default: 4,
  },

  showDelay: {
    type: [Number, String],
    default: undefined,
  },
  hideDelay: {
    type: [Number, String],
    default: 100,
  },

});

const emit = defineEmits([

]);

const modelValue = defineModel({
  type: Boolean,
});


/* floater */

import { reactiveOmit } from '@vueuse/core';

const floaterProp = reactiveOmit(props, [ 'text', 'class' ]);

</script>


<template>
  <u-floater v-bind="floaterProp" v-model="modelValue">
    <div class="px-2 py-1 rounded-lg bg-neutral text-on-neutral" :class="props.class">
      {{ props.text }}
      <slot />
    </div>
  </u-floater>
</template>
