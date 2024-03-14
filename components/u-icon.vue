<script setup>

/* interface */

const props = defineProps({

  name: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <i :class="props.name" />
</template>
