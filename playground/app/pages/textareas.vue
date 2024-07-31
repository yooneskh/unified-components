<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 space-y-4 mt-3">

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