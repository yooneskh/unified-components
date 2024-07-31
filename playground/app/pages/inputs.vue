<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 mt-3 space-y-4">

      <u-input
        label="Simple Input"
        placeholder="Enter value"
        icon="i-mdi-account"
        inner-icon="i-mdi-home"
        append-inner-icon="i-mdi-office-building"
        append-icon="i-mdi-check"
        message="hello"
      />

      <u-input
        label="Disabled Input"
        placeholder="Enter value"
        icon="i-mdi-account"
        inner-icon="i-mdi-home"
        append-inner-icon="i-mdi-office-building"
        append-icon="i-mdi-check"
        message="hello"
        disabled
      />

    </div>

  </div>
</template>