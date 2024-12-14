<script setup>

const modelValue = ref(['tag 1', 'tag 2']);

</script>


<template>
  <div>

    <u-typography
      title="Tag Inputs"
    />

    <div class="space-y-2 mt-2">

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

    </div>

  </div>
</template>