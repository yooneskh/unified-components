<script setup>

/* interface */

const props = defineProps({

  title: {
    type: String,
    default: undefined,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  text: {
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
  titleClasses: {
    type: String,
    default: undefined,
  },
  subtitleClasses: {
    type: String,
    default: undefined,
  },
  textClasses: {
    type: String,
    default: undefined,
  },
  iconClasses: {
    type: String,
    default: undefined,
  },
  appendIconClasses: {
    type: String,
    default: undefined,
  },

  interchangeText: {
    type: Boolean,
    default: undefined,
  },

});

const emit = defineEmits([

]);

</script>


<template>
  <div v-if="props.title || props.subtitle || props.icon || props.appendIcon || props.text || !isSlotEmpty($slots.title) || !isSlotEmpty($slots.subtitle) || !isSlotEmpty($slots.prepend) || !isSlotEmpty($slots.append) || !isSlotEmpty($slots.default) || (props.interchangeText && (props.text || !isSlotEmpty($slots.text)))">

    <div
      v-if="props.title || props.subtitle || props.icon || props.appendIcon || !isSlotEmpty($slots.title) || !isSlotEmpty($slots.subtitle) || !isSlotEmpty($slots.prepend) || !isSlotEmpty($slots.append) || (props.interchangeText && (props.text || !isSlotEmpty($slots.text)))"
      class="flex gap-[0.5em]"
      :class="[!((props.title || !isSlotEmpty($slots.title)) && (props.subtitle || !isSlotEmpty($slots.subtitle))) ? 'items-center' : 'items-start']">

      <slot name="prepend">
        <u-icon
          v-if="props.icon"
          :name="props.icon"
          class="text-[1.5em]"
          :class="[
            props.iconClasses,
            {
              'mt-[0.25em]': (props.title || !isSlotEmpty($slots.title)) && (props.subtitle || !isSlotEmpty($slots.subtitle)),
            },
          ]"
        />
      </slot>

      <div class="grow">
        <slot name="title">
          <div v-if="props.title" class="text-[1.5em]" :class="props.titleClasses">
            {{ props.title }}
          </div>
        </slot>
        <slot name="subtitle">
          <div v-if="props.subtitle" class="text-[1em] opacity-75" :class="[ props.subtitleClasses, { '-mt-[0.25em]': props.title || !isSlotEmpty($slots.title) } ]">
            {{ props.subtitle }}
          </div>
        </slot>
        <slot v-if="props.interchangeText" name="text">
          <p v-if="props.text" :class="[ props.textClasses, { 'mt-[0.5em]': props.title || props.subtitle || !isSlotEmpty($slots.title) || !isSlotEmpty($slots.subtitle) } ]">
            {{ props.text }}
          </p>
        </slot>
      </div>

      <slot name="append">
        <u-icon
          v-if="props.appendIcon"
          :name="props.appendIcon"
          class="text-[1.5em]"
          :class="[
            props.appendIconClasses,
            {
              'mt-[0.25em]': props.title || props.subtitle || !isSlotEmpty($slots.title) || !isSlotEmpty($slots.subtitle),
            },
          ]"
        />
      </slot>

    </div>

    <slot v-if="!props.interchangeText" name="text">
      <p v-if="props.text" :class="[ props.textClasses, { 'mt-[0.5em]': props.title || props.subtitle || props.icon || props.appendIcon || !isSlotEmpty($slots.title) || !isSlotEmpty($slots.subtitle) || !isSlotEmpty($slots.prepend) || !isSlotEmpty($slots.append) } ]">
        {{ props.text }}
      </p>
    </slot>

    <slot />

  </div>
</template>
