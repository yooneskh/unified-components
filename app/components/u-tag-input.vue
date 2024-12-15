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
  chipClasses: {
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
  type: Array,
});


/* input */

const currentInput = ref('');


function deleteValueAtIndex(index) {
  modelValue.value = modelValue.value.filter((_, i) => i !== index);
}

function appendCurrentInput() {

  if (!currentInput.value) {
    return;
  }


  modelValue.value = [
    ...(Array.isArray(modelValue.value) ? modelValue.value : []),
    currentInput.value,
  ];

  currentInput.value = '';

}

</script>


<template>
  <div>

    <u-label
      v-if="props.label"
      :text="props.label"
      class="mb-1"
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
        class="input-container"
        :class="containerClasses">

        <slot name="prepend-inner">
          <u-icon
            v-if="props.innerIcon"
            :name="props.innerIcon"
            class="ms-2 shrink-0"
          />
        </slot>

        <slot name="chips">
          <div v-if="modelValue?.length > 0" class="ms-2 flex flex-wrap items-center gap-1">
            <u-chip
              v-for="(value, index) of modelValue || []"
              :label="value"
              class="soft neutral text-xs"
              button-classes="!p-[0.25em] !text-[0.8em] rounded-full"
              :append-action-icon="!('disabled' in $attrs) ? 'i-mdi-close' : undefined"
              @click:append-action="deleteValueAtIndex(index);"
            />
          </div>
        </slot>

        <input
          v-bind="$attrs"
          :type="props.type"
          :placeholder="props.placeholder"
          class="
            input-element
            w-0 grow min-w-1/4
          "
          :class="props.inputClasses"
          v-model="currentInput"
          @keyup.enter="appendCurrentInput()"
          @keyup.escape="currentInput = '';"
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

    <p v-if="props.message" class="text-sm mt-1">
      {{ props.message }}
    </p>

  </div>
</template>
