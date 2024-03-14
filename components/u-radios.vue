<script setup>

/* interface */

const props = defineProps({

  items: {
    type: Array,
    default: undefined,
  },

  label: {
    type: String,
    default: undefined,
  },

  radioClasses: {
    type: String,
    default: undefined,
  },

  message: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);


const modelValue = defineModel({

});


</script>


<template>
  <div>

    <u-label
      v-if="props.label"
      :text="props.label"
      class="mb-1"
    />

    <div>

      <label
        v-for="item of props.items" :key="item.value || item"
        class="flex items-center">

        <input
          type="radio"
          class="w-[0.9em] h-[0.9em]"
          :class="props.radioClasses"
          :value="item.value || item"
          v-model="modelValue"
        />

        <span class="ms-2">
          {{ item.title || item }}
        </span>

      </label>

      <slot />

    </div>

    <p v-if="props.message" class="text-sm mt-1">
      {{ props.message }}
    </p>

  </div>
</template>
