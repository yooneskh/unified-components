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

  clickHandler: {
    type: Function,
  },

});


/* content */

const hasDefaultContent = computed(() => {

  if (props.label) {
    return true;
  }

  return !isSlotEmpty(useSlots().default);

});

const isDefaultContentVisible = computed(() => {

  if (props.label) {
    return true;
  }

  return !isSlotEmpty(useSlots().default, true);

});


/* click handler */

const innerLoading = ref(false);

async function handleClick() {

  if (typeof props.clickHandler !== 'function') {
    return;
  }

  innerLoading.value = true;

  try {
    await props.clickHandler?.()
  }
  catch (error) {
    throw error;
  }
  finally {
    innerLoading.value = false;
  }

}

</script>


<template>
  <button
    class="btn fill neutral"
    :class="{
      'btn-icon-only': props.icon && !isDefaultContentVisible,
      'btn-loading': props.loading || innerLoading,
    }"
    :disabled="$attrs.disabled || props.loading || innerLoading"
    @click="handleClick()">

    <span
      v-if="props.loading || innerLoading"
      class="btn-loader">
      <u-spinner
        class="h-1em"
      />
    </span>

    <u-icon
      v-if="props.icon"
      :name="props.icon"
    />

    <span v-if="hasDefaultContent" :class="{ 'hidden': !isDefaultContentVisible }" data-no-reference>
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