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
    default: 'fill',
  },
  color: {
    type: String,
    default: 'neutral',
  },

  loading: {
    type: Boolean,
  },

});

const emit = defineEmits([

]);


/* content */

const hasDefaultContent = computed(() => {

  if (props.label) {
    return true;
  }

  return !isSlotEmpty(useSlots().default);

});

</script>


<template>
  <button
    class="btn"
    :class="[
      props.variant,
      {
        'btn-icon-only': props.icon && !hasDefaultContent,
        'btn-loading': props.loading,
      }
    ]"
    :style="[
      props.color && `--u-color: var(--theme-${props.color}); --u-on-color: var(--theme-on-${props.color})`,
    ]">

    <span
      v-if="props.loading"
      class="btn-loader absolute flex items-center justify-center inset-0 bg-white/50">
      <u-spinner
        class="h-1em"
      />
    </span>

    <u-icon
      v-if="props.icon"
      :name="props.icon"
    />

    <span v-if="hasDefaultContent" data-no-reference>
      {{ props.label }}
      <slot />
    </span>

    <u-icon
      v-if="props.appendIcon"
      :name="props.appendIcon"
    />

  </button>
</template>


<style scoped>

  .btn-loading > *:not(.btn-loader) {
    opacity: 0;
  }

</style>