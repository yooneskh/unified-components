<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Variants
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Fill"
        class="fill u-color-neutral"
      />

      <u-btn
        label="Outline"
        class="outline u-color-neutral"
      />

      <u-btn
        label="Soft"
        class="soft u-color-neutral"
      />

      <u-btn
        label="Ghost"
        class="ghost u-color-neutral"
      />

      <u-btn
        label="Link"
        class="link u-color-neutral"
      />

      <u-btn
        label="Text"
        class="text u-color-neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Neutral"
        class="fill u-color-neutral"
      />

      <u-btn
        label="Primary"
        class="fill u-color-primary"
      />

      <u-btn
        label="Secondary"
        class="outline u-color-secondary"
      />

      <u-btn
        label="Success"
        class="soft u-color-success"
      />

      <u-btn
        label="Error"
        class="ghost u-color-error"
      />

      <u-btn
        label="Error"
        class="link u-color-error"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill u-color-neutral"
      />

      <u-btn
        label="Button"
        append-icon="i-mdi-account"
        class="outline u-color-neutral"
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft u-color-neutral"
      />

      <u-btn
        icon="i-mdi-account"
        class="ghost u-color-neutral"
      />

      <u-btn
        icon="i-mdi-plus"
        class="link u-color-neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill u-color-neutral text-sm"
      />

      <u-btn
        label="Button"
        class="outline u-color-neutral"
      />

      <u-btn
        label="Button"
        class="soft u-color-neutral text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill u-color-neutral rounded-none"
      />

      <u-btn
        label="Button"
        class="fill u-color-neutral rounded"
      />

      <u-btn
        label="Button"
        class="fill u-color-neutral rounded-xl"
      />

      <u-btn
        label="Button"
        class="fill u-color-neutral rounded-full"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Loading
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill u-color-neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill u-color-neutral"
        loading
      />
      
      <u-btn
        icon="i-mdi-account"
        class="fill u-color-neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="outline u-color-neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="ghost u-color-neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="text u-color-neutral"
        loading
      />

    </div>

  </div>
</template>