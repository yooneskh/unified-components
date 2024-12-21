<script setup>

</script>


<template>
  <div class="space-y-2">

    <u-typography
      title="Chips"
    />

    <div class="space-x-2">

      <u-chip
        label="Default (Soft)"
      />

      <u-chip
        label="Fill"
        class="fill"
      />

      <u-chip
        label="Outline"
        class="outline"
      />

      <u-chip
        label="Soft"
        class="soft"
      />

      <u-chip
        label="Ghost"
        class="ghost"
      />

      <u-chip
        label="Link"
        class="link"
      />

      <u-chip
        label="Text"
        class="text"
      />

    </div>

    <div class="space-x-2">

      <u-chip
        label="Default (Neutral)"
        class="fill"
      />

      <u-chip
        label="Primary"
        class="fill primary"
      />

      <u-chip
        label="Success"
        class="soft success"
      />

      <u-chip
        label="Danger"
        class="ghost danger"
      />

      <u-chip
        label="Success"
        class="link success"
      />

    </div>

    <div class="flex items-start gap-2">

      <u-chip
        label="Chip"
        icon="i-mdi-account"
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
        class="fill neutral"
      />

    </div>

    <div class="flex items-start gap-2">

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

    <div class="flex gap-2 mt-2 items-start">

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

    <div class="flex gap-2 mt-2 items-start">

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