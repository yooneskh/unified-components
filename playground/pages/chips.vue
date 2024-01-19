<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Variants
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Fill"
        class="fill color-dark"
      />

      <u-chip
        label="Outline"
        class="outline color-dark"
      />

      <u-chip
        label="Soft"
        class="soft color-dark"
      />

      <u-chip
        label="Ghost"
        class="ghost color-dark"
      />

      <u-chip
        label="Link"
        class="link color-dark"
      />

      <u-chip
        label="Text"
        class="text color-dark"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Fill"
        class="fill color-primary"
      />

      <u-chip
        label="Outline"
        class="outline color-secondary"
      />

      <u-chip
        label="Soft"
        class="soft color-success"
      />

      <u-chip
        label="Ghost"
        class="ghost color-error"
      />

      <u-chip
        label="Link"
        class="link color-success"
      />

      <u-chip
        label="Text"
        class="text color-teal"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        class="fill color-dark"
      />

      <u-chip
        label="Chip"
        append-icon="i-mdi-account"
        class="outline color-dark"
      />

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft color-dark"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill color-dark text-sm"
      />

      <u-chip
        label="Chip"
        class="outline color-dark"
      />

      <u-chip
        label="Chip"
        class="soft color-dark text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill color-dark rounded-none"
      />

      <u-chip
        label="Chip"
        class="fill color-dark rounded"
      />

      <u-chip
        label="Chip"
        class="fill color-dark rounded-xl"
      />

      <u-chip
        label="Chip"
        class="fill color-dark rounded-full"
      />

    </div>

  </div>
</template>