<script setup>

/* interface */

const props = defineProps({

  backdropClasses: {
    type: String,
    default: undefined,
  },
  containerClasses: {
    type: String,
    default: undefined,
  },

  teleportTarget: {
    type: [String, Object],
    default: 'body',
  },
  transition: {
    type: String,
    default: 'dialog-fade',
  },

});

const emit = defineEmits([

]);


const modelValue = defineModel({
  type: Boolean,
});


/* mounted */

import { useMounted } from '@vueuse/core';

const isMounted = useMounted();

</script>


<template>
  <teleport v-if="isMounted" :to="props.teleportTarget">
    <transition :name="props.transition">

      <div
        v-if="modelValue"
        class="
          fixed top-0 left-0 h-full w-full
          bg-black/15
          flex items-center justify-center cursor-pointer
          p-4
        "
        :class="props.backdropClasses"
        @click="modelValue = false;">

        <div
          class="
            cursor-auto
            max-w-full
            max-h-full
            overflow-auto
          "
          :class="props.containerClasses"
          @click.stop>

          <slot />

        </div>

      </div>

    </transition>
  </teleport>
</template>


<style scoped>

  .dialog-fade-enter-active,
  .dialog-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .dialog-fade-enter-from,
  .dialog-fade-leave-to {
    opacity: 0;
  }

</style>