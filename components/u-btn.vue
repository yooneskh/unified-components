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

import { Text, Fragment, Comment } from 'vue';


function isVnodeEmpty(vnodes) {
  return vnodes.every(node => {

    if (node.type === Comment) {
      return true;
    }

    if (node.type === Text && typeof node.children === 'string' && !node.children.trim()) {
      return true;
    }

    if (node.type === Fragment && isVnodeEmpty(node.children)) {
      return true;
    }

    return false;

  });
}

const hasDefaultContent = computed(() => {

  if (props.label) {
    return true;
  }


  const defaultContent = useSlots()?.default?.();

  if (!defaultContent) {
    return false;
  }


  return !isVnodeEmpty(defaultContent);

});

</script>


<template>
  <button
    class="btn"
    :class="[
      `u-color-${props.color}`,
      props.variant,
      {
        'btn-icon-only': props.icon && !hasDefaultContent,
        'btn-loading': props.loading,
      }
    ]">

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

    <span v-if="hasDefaultContent" data-no-reference>
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