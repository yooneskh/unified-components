<script setup>

/* interface */

const props = defineProps({

  refReference: {
    type: Object,
    default: undefined,
  },

  placement: {
    type: String,
    default: undefined,
  },
  strategy: {
    type: String,
    default: undefined,
  },

});

const emit = defineEmits([

]);


/* floating ui */

import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue';

const refFloating = ref();
const refParent = useParentElement();

const refReference = computed(() =>
  props.refReference || refParent.value
);

const { floatingStyles } = useFloating(refReference, refFloating, {
  strategy: toRef(props, 'strategy'),
  placement: toRef(props, 'placement'),
  middleware: [
    offset(6),
    flip(),
    shift({
      padding: 8,
    }),
  ],
  whileElementsMounted: autoUpdate,
});


/* interaction */

const shouldShow = ref(true);

</script>


<template>
  <teleport v-if="shouldShow" to="body">
    <div ref="refFloating" class="z-1" :style="floatingStyles">
      <slot />
    </div>
  </teleport>
</template>
