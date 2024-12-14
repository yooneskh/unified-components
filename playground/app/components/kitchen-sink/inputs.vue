<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Inputs"
    />

    <div class="space-y-2 mt-2">

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