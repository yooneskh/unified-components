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

const emit = defineEmits([

]);


/* content */

const hasDefaultContent = computed(() => {

  if (props.label) {
    return true;
  }

  return !isSlotEmpty(useSlots().default);

});


/* click handler */

const loading = ref(false);

async function handleClick() {

  if (typeof props.clickHandler !== 'function') {
    return;
  }

  loading.value = true;

  try {
    await props.clickHandler?.()
  }
  catch (error) {
    throw error;
  }
  finally {
    loading.value = false;
  }

}

</script>


<template>
  <button
    class="btn"
    :class="{
      'btn-icon-only': props.icon && !hasDefaultContent,
      'btn-loading': props.loading || loading,
    }"
    @click="handleClick()">

    <span
      v-if="props.loading || loading"
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