<script setup>

const modelValue = ref(['tag 1', 'tag 2']);

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 space-y-4 mt-3">

      <u-tag-input
        label="Simple Tag Input"
        placeholder="Enter value"
        icon="i-mdi-account"
        append-inner-icon="i-mdi-office-building"
        append-icon="i-mdi-check"
        message="hello"
        v-model="modelValue"
      />

      <u-tag-input
        label="Disabled Tag Input"
        placeholder="Enter value"
        icon="i-mdi-account"
        append-inner-icon="i-mdi-office-building"
        append-icon="i-mdi-check"
        message="hello"
        disabled
        v-model="modelValue"
      />

      <pre class="mt-4">{{ { modelValue } }}</pre>

    </div>

  </div>
</template>