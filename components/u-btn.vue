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
  <button
    class="btn"
    :class="{
      'btn-icon-only': props.icon && !props.label && !$slots.default,
    }">
    
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

  </button>  
</template>