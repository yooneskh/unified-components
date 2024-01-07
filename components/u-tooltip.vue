<script setup>

/* interface */

const props = defineProps({

  refReference: {
    type: Object,
    default: undefined,
  },

  placement: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <u-floater :ref-reference="props.refReference" :placement="props.placement">
    <div class="bg-dark text-light px-2 py-1 rounded-lg">
      <slot />
    </div>
  </u-floater>
</template>
