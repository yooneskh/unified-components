<script setup>

/* interface */

const props = defineProps({

  rows: {
    type: [String, Number],
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
    />

    <div class="flex items-start gap-2">

      <slot name="prepend">
        <u-icon
          v-if="props.icon"
          :name="props.icon"
          class="mt-3"
        />
      </slot>

      <textarea
        v-bind="$attrs"
        :type="props.type"
        :placeholder="props.placeholder"
        :rows="props.rows"
        class="input-textarea"
        :class="props.inputClasses"
        v-model="modelValue"
      />

      <slot name="prepend">
        <u-icon
          v-if="props.appendIcon"
          :name="props.appendIcon"
          class="mt-3"
        />
      </slot>

    </div>

    <p v-if="props.message" class="text-sm mt-1 ms-1">
      {{ props.message }}
    </p>

  </div>
</template>
