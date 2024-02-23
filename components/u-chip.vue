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

  variant: {
    type: String,
    default: 'soft',
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
  <span
    class="chip"
    :class="[
      `u-color-${props.color}`,
      props.variant,
    ]">

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
