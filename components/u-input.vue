<script setup>

/* interface */

const props = defineProps({

  type: {
    type: String,
    default: 'text',
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

  icon: {
    type: String,
    default: undefined,
  },
  appendIcon: {
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

    <div class="flex items-center gap-2">

      <u-icon
        v-if="props.icon"
        :name="props.icon"
      />

      <input
        :type="props.type"
        :placeholder="props.placeholder"
        class="
          border border-2
          rounded-md
          py-[0.4em] px-[0.7em]
          w-full
          block
        "
        :class="props.inputClasses"
        v-model="modelValue"
      />

      <u-icon
        v-if="props.appendIcon"
        :name="props.appendIcon"
      />

    </div>

    <p v-if="props.message" class="text-sm mt-1 ms-1">
      {{ props.message }}
    </p>

  </div>
</template>
