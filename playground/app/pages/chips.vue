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
        class="fill neutral"
      />

      <u-chip
        label="Outline"
        class="outline neutral"
      />

      <u-chip
        label="Soft"
        class="soft neutral"
      />

      <u-chip
        label="Ghost"
        class="ghost neutral"
      />

      <u-chip
        label="Link"
        class="link neutral"
      />

      <u-chip
        label="Text"
        class="text neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Fill"
        class="fill primary"
      />

      <u-chip
        label="Outline"
        class="outline secondary"
      />

      <u-chip
        label="Soft"
        class="soft success"
      />

      <u-chip
        label="Ghost"
        class="ghost error"
      />

      <u-chip
        label="Link"
        class="link success"
      />

      <u-chip
        label="Text"
        class="text teal"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        class="fill neutral"
      />

      <u-chip
        label="Chip"
        append-icon="i-mdi-account"
        class="outline neutral"
      />

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Actions
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Chip"
        append-action-icon="i-mdi-account"
        class="outline neutral"
      />

      <u-chip
        label="Chip"
        action-icon="i-mdi-account"
        append-action-icon="i-mdi-plus"
        class="soft neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill neutral text-sm"
      />

      <u-chip
        label="Chip"
        class="outline neutral"
      />

      <u-chip
        label="Chip"
        class="soft neutral text-lg"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        class="fill neutral rounded-none"
      />

      <u-chip
        label="Chip"
        class="fill neutral rounded"
      />

      <u-chip
        label="Chip"
        class="fill neutral rounded-xl"
      />

      <u-chip
        label="Chip"
        class="fill neutral rounded-full"
      />

    </div>

  </div>
</template>