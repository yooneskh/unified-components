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

});

const emit = defineEmits([
  'click:action',
  'click:append-action',
]);

</script>


<template>
  <span
    class="chip fill neutral"
    :class="{
      'chip-start-icon': props.actionIcon || props.icon,
      'chip-end-icon': props.appendActionIcon || props.appendIcon,
    }">

    <u-btn
      v-if="props.actionIcon"
      variant="ghost"
      :icon="props.actionIcon"
      class="chip-button"
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
      class="chip-button"
      @click="emit('click:append-action')"
    />

  </span>  
</template>
