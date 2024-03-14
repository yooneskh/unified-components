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

    <u-icon
      v-if="props.icon"
      :name="props.icon"
    />

    {{ props.label }}
    <slot />

    <u-icon
      v-if="props.appendIcon"
      :name="props.appendIcon"
    />

  </span>  
</template>
