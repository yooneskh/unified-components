<script setup>

/* page */

definePageMeta({
  name: 'general.home',
});

useHead({
  title: 'Home',
});

</script>


<template>
  <div class="p-4">

    <u-typography
      title="Kitchen Sink"
    />

    <div class="mt-4 space-y-4">
      <kitchen-sink-alerts />
      <kitchen-sink-buttons />
      <kitchen-sink-cards />
      <kitchen-sink-checkboxes />
      <kitchen-sink-chips />
      <kitchen-sink-dialogs />
      <kitchen-sink-dropdowns />
      <kitchen-sink-icons />
      <kitchen-sink-inputs />
      <kitchen-sink-radios />
      <kitchen-sink-selects />
      <kitchen-sink-tag-inputs />
      <kitchen-sink-textareas />
      <kitchen-sink-tooltips />
      <kitchen-sink-typographies />
    </div>

  </div>
</template>