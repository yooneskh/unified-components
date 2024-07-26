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

  actionIcon: {
    type: String,
  },
  appendActionIcon: {
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
  'click:action',
  'click:append-action',
]);

</script>


<template>
  <span
    class="chip"
    :class="[
      props.variant,
      {
        'ps-[0.4em]': props.actionIcon || props.icon,
        'pe-[0.4em]': props.appendActionIcon || props.appendIcon,
      },
    ]"
    :style="[
      props.color && `--u-color: var(--theme-${props.color}); --u-on-color: var(--theme-on-${props.color})`,
    ]">

    <u-btn
      v-if="props.actionIcon"
      variant="ghost"
      :icon="props.actionIcon"
      class="text-[0.8em] rounded-full p-[0.2em]"
      @click="emit('click:action')"
    />

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

    <u-btn
      v-if="props.appendActionIcon"
      variant="ghost"
      :icon="props.appendActionIcon"
      class="text-[0.85em] rounded-full p-[0.2em]"
      @click="emit('click:append-action')"
    />

  </span>  
</template>
