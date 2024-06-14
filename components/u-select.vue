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
          rounded-md
          block w-full
          flex items-center gap-2
        "
        :class="containerClasses">

        <slot name="prepend-inner">
          <u-icon
            v-if="props.innerIcon"
            :name="props.innerIcon"
            class="ms-2 shrink-0"
          />
        </slot>

        <select
          class="
            border-none
            rounded-none
            bg-transparent
            py-[0.5em] px-[0.7em]
            w-full
            block
          "
          :class="props.inputClasses"
          v-model="modelValue">

          <option v-if="props.placeholder" :value="undefined" selected disabled hidden>
            {{ props.placeholder }}
          </option>

          <option v-for="item of props.items" :key="item.value ?? item" :value="item.value ?? item">
            {{ item.title ?? item }}
          </option>

          <slot />

        </select>

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
