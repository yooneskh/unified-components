<script setup>

/* interface */

const props = defineProps({

  label: {
    type: String,
  },

  icon: {
    type: String,
  },
  appendIcon: {
    type: String,
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <span class="chip">

    <i
      v-if="props.icon"
      :class="props.icon"
    />

    {{ props.label }}
    <slot />

    <i
      v-if="props.appendIcon"
      :class="props.appendIcon"
    />

  </span>  
</template>
