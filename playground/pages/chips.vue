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
        class="fill u-color-neutral"
      />

      <u-chip
        label="Outline"
        class="outline u-color-neutral"
      />

      <u-chip
        label="Soft"
        class="soft u-color-neutral"
      />

      <u-chip
        label="Ghost"
        class="ghost u-color-neutral"
      />

      <u-chip
        label="Link"
        class="link u-color-neutral"
      />

      <u-chip
        label="Text"
        class="text u-color-neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Fill"
        class="fill u-color-primary"
      />

      <u-chip
        label="Outline"
        class="outline u-color-secondary"
      />

      <u-chip
        label="Soft"
        class="soft u-color-success"
      />

      <u-chip
        label="Ghost"
        class="ghost u-color-error"
      />

      <u-chip
        label="Link"
        class="link u-color-success"
      />

      <u-chip
        label="Text"
        class="text u-color-teal"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        class="fill u-color-neutral"
      />

      <u-chip
        label="Chip"
        append-icon="i-mdi-account"
        class="outline u-color-neutral"
      />

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft u-color-neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill u-color-neutral text-sm"
      />

      <u-chip
        label="Chip"
        class="outline u-color-neutral"
      />

      <u-chip
        label="Chip"
        class="soft u-color-neutral text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill u-color-neutral rounded-none"
      />

      <u-chip
        label="Chip"
        class="fill u-color-neutral rounded"
      />

      <u-chip
        label="Chip"
        class="fill u-color-neutral rounded-xl"
      />

      <u-chip
        label="Chip"
        class="fill u-color-neutral rounded-full"
      />

    </div>

  </div>
</template>