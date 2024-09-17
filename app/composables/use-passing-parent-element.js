

export function usePassingParentElement() {

  const parentEl = ref();


  onMounted(() => {

    const vm = getCurrentInstance();

    let parent = vm?.proxy?.$el.parentElement;

    while (parent && parent.hasAttribute('data-no-reference')) {
      parent = parent.parentElement;
    }

    parentEl.value = parent;

  });


  return parentEl;

}