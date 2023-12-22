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

  loading: {
    type: Boolean,
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
      'btn-loading': props.loading,
    }">

    <span
      v-if="props.loading"
      class="btn-loader absolute flex items-center justify-center inset-0 bg-white/50">
      <u-spinner
        class="h-1em"
      />
    </span>

    <i
      v-if="props.icon"
      :class="props.icon"
    />

    <span v-if="props.label || $slots.default">
      {{ props.label }}
      <slot />
    </span>

    <i
      v-if="props.appendIcon"
      :class="props.appendIcon"
    />

  </button>  
</template>


<style scoped>

  .btn-loading > *:not(.btn-loader) {
    opacity: 0;
  }

</style>