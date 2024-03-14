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
  placeholder: {
    type: String,
    default: undefined,
  },

  inputClasses: {
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
      class="mb-2 ms-1"
    />

    <select
      class="
        border border-2
        rounded-md
        py-[0.4em] px-[0.7em]
        w-full
        block
      "
      :class="props.inputClasses"
      v-model="modelValue">

      <option v-if="props.placeholder" :value="undefined" selected disabled hidden>
        {{ props.placeholder }}
      </option>

      <option v-for="item of props.items" :key="item.value || item" :value="item.value || item">
        {{ item.title || item }}
      </option>

      <slot />

    </select>

    <p v-if="props.message" class="text-sm mt-1 ms-1">
      {{ props.message }}
    </p>

  </div>
</template>
