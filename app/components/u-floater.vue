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

  trigger: {
    type: String,
    default: 'click',
  },
  persist: {
    type: [Boolean, String],
    default: undefined,
  },

  offset: {
    type: [Number, String],
    default: undefined,
  },

  showDelay: {
    type: [Number, String],
    default: undefined,
  },
  hideDelay: {
    type: [Number, String],
    default: undefined,
  },

});

const emit = defineEmits([

]);


const modelValue = defineModel({
  type: Boolean,
});


/* floating ui */

import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue';

const refFloating = ref();
const refParent = usePassingParentElement();

const refReference = computed(() =>
  props.refReference || refParent.value
);

const { floatingStyles } = useFloating(refReference, refFloating, {
  strategy: toRef(props, 'strategy'),
  placement: toRef(props, 'placement'),
  middleware: [
    offset(Number(props.offset) || 0),
    flip(),
    shift({
      padding: 8,
    }),
  ],
  whileElementsMounted: autoUpdate,
});


/* interaction */

const isInteracted = ref(false);

const shouldShow = computed({
  get: () => {
    if (modelValue.value === undefined) {
      return isInteracted.value;
    }
    else {
      return modelValue.value;
    }
  },
  set:  v => {
    if (modelValue.value === undefined) {
      isInteracted.value = v;
    }
    else {
      modelValue.value = v;
    }
  }
});


import { useEventListener, onClickOutside } from '@vueuse/core';


let handleShow;
let handleHide;

function showFloater() {

  clearTimeout(handleShow);
  clearTimeout(handleHide);

  if (!props.showDelay) {
    shouldShow.value = true;
    return;
  }

  handleShow = setTimeout(() => {
    shouldShow.value = true;
  }, Number(props.showDelay));

}

function hideFloater() {

  clearTimeout(handleShow);
  clearTimeout(handleHide);

  if (!props.hideDelay) {
    shouldShow.value = false;
    return;
  }

  handleHide = setTimeout(() => {
    shouldShow.value = false;
  }, Number(props.hideDelay));

}

function toggleFloater() {
  if (shouldShow.value) {
    hideFloater();
  }
  else {
    showFloater();
  }
}


if (props.trigger === 'hover') {
  useEventListener(refReference, 'mouseenter', showFloater);
  useEventListener(refReference, 'mouseleave', hideFloater);
  useEventListener(refFloating, 'mouseenter', showFloater);
  useEventListener(refFloating, 'mouseleave', hideFloater);
}
else {

  useEventListener(refReference, 'click', toggleFloater);

  if (props.persist !== true) {
    onClickOutside(refReference, hideFloater, {
      ignore: props.persist === 'content' ? [ refFloating ] : [],
    });
  }

}

</script>


<template>
  <teleport v-if="shouldShow" to="body">
    <div ref="refFloating" class="z-1" :style="floatingStyles">
      <slot />
    </div>
  </teleport>
</template>
