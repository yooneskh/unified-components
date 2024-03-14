<script setup>

/* interface */

const props = defineProps({

  text: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <label class="block">
    {{ props.text }}
    <slot />
  </label>
</template>
