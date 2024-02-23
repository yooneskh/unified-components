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
        variant="fill"
        color="neutral"
      />

      <u-chip
        label="Outline"
        variant="outline"
        color="neutral"
      />

      <u-chip
        label="Soft"
        variant="soft"
        color="neutral"
      />

      <u-chip
        label="Ghost"
        variant="ghost"
        color="neutral"
      />

      <u-chip
        label="Link"
        variant="link"
        color="neutral"
      />

      <u-chip
        label="Text"
        variant="text"
        color="neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Fill"
        variant="fill"
        color="primary"
      />

      <u-chip
        label="Outline"
        variant="outline"
        color="secondary"
      />

      <u-chip
        label="Soft"
        variant="soft"
        color="success"
      />

      <u-chip
        label="Ghost"
        variant="ghost"
        color="error"
      />

      <u-chip
        label="Link"
        variant="link"
        color="success"
      />

      <u-chip
        label="Text"
        variant="text"
        color="teal"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        variant="fill"
        color="neutral"
      />

      <u-chip
        label="Chip"
        append-icon="i-mdi-account"
        variant="outline"
        color="neutral"
      />

      <u-chip
        label="Chip"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        variant="soft"
        color="neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        variant="fill"
        color="neutral"
        class="text-sm"
      />

      <u-chip
        label="Chip"
        variant="outline"
        color="neutral"
        class="outline"
      />

      <u-chip
        label="Chip"
        variant="soft"
        color="neutral"
        class="text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-chip
        label="Chip"
        variant="fill"
        color="neutral"
        class="rounded-none"
      />

      <u-chip
        label="Chip"
        variant="fill"
        color="neutral"
        class="rounded"
      />

      <u-chip
        label="Chip"
        variant="fill"
        color="neutral"
        class="rounded-xl"
      />

      <u-chip
        label="Chip"
        variant="fill"
        color="neutral"
        class="rounded-full"
      />

    </div>

  </div>
</template>