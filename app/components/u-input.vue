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

  labelClasses: {
    type: String,
    default: undefined,
  },
  containerClasses: {
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
  innerIcon: {
    type: String,
    default: undefined,
  },
  appendInnerIcon: {
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
      :class="props.labelClasses"
    />

    <div class="flex items-center gap-2">

      <slot name="prepend">
        <u-icon
          v-if="props.icon"
          :name="props.icon"
          class="shrink-0"
        />
      </slot>

      <div
        class="
          border border-2
          focus-within:border-primary transition-border
          rounded-md
          block w-full
          flex items-center
        "
        :class="containerClasses">

        <slot name="prepend-inner">
          <u-icon
            v-if="props.innerIcon"
            :name="props.innerIcon"
            class="ms-2 shrink-0"
          />
        </slot>

        <input
          :type="props.type"
          :placeholder="props.placeholder"
          class="
            border-none rounded-none outline-none
            bg-transparent
            py-[0.4em] px-[0.7em]
            w-full
            block
          "
          :class="props.inputClasses"
          v-model="modelValue"
        />

        <slot name="append-inner">
          <u-icon
            v-if="props.appendInnerIcon"
            :name="props.appendInnerIcon"
            class="me-2 shrink-0"
          />
        </slot>

      </div>

      <slot name="append">
        <u-icon
          v-if="props.appendIcon"
          :name="props.appendIcon"
          class="shrink-0"
        />
      </slot>

    </div>

    <p v-if="props.message" class="mt-1 ms-1">
      {{ props.message }}
    </p>

  </div>
</template>
