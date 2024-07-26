<script setup>

/* interface */

const props = defineProps({

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
    default: undefined,
  },
  strategy: {
    type: String,
    default: undefined,
  },

  trigger: {
    type: String,
    default: 'click',
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

const floaterProp = reactiveOmit(props, [ 'class' ]);

</script>


<template>
  <u-floater v-bind="floaterProp" v-model="modelValue">
    <slot />
  </u-floater>
</template>
