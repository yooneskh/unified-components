<script setup>

/* interface */

const props = defineProps({

  label: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);


const modelValue = defineModel({
  type: Boolean,
});


</script>


<template>
  <label class="flex items-center">

    <input
      type="checkbox"
      class="w-[1em] h-[1em]"
      v-model="modelValue"
    />

    <span class="ms-2">
      {{ props.label }}
    </span>

  </label>
</template>
