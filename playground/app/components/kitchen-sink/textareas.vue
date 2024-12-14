<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Textareas"
    />

    <div class="space-y-2 mt-2">

      <u-textarea
        label="Simple Input"
        rows="4"
        placeholder="Enter value"
        icon="i-mdi-account"
        append-icon="i-mdi-check"
        message="hello"
      />

      <u-textarea
        label="Disabled Input"
        rows="4"
        placeholder="Enter value"
        icon="i-mdi-account"
        append-icon="i-mdi-check"
        message="hello"
        disabled
      />

    </div>

  </div>
</template>