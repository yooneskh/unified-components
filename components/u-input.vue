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
      class="ms-1"
    />

    <div class="flex items-center gap-2">

      <slot name="prepend">
        <u-icon
          v-if="props.icon"
          :name="props.icon"
        />
      </slot>

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

      <slot name="append">
        <u-icon
          v-if="props.appendIcon"
          :name="props.appendIcon"
        />
      </slot>

    </div>

    <p v-if="props.message" class="text-sm mt-1 ms-1">
      {{ props.message }}
    </p>

  </div>
</template>
