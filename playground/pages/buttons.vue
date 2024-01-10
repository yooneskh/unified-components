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
        class="fill color-dark"
      />

      <u-btn
        label="Outline"
        class="outline color-dark"
      />

      <u-btn
        label="Soft"
        class="soft color-dark"
      />

      <u-btn
        label="Ghost"
        class="ghost color-dark"
      />

      <u-btn
        label="Link"
        class="link color-dark"
      />

      <u-btn
        label="Text"
        class="text color-dark"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill color-dark"
      />

      <u-btn
        label="Button"
        append-icon="i-mdi-account"
        class="outline color-dark"
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft color-dark"
      />

      <u-btn
        icon="i-mdi-account"
        class="ghost color-dark"
      />

      <u-btn
        icon="i-mdi-plus"
        class="link color-dark"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill color-dark text-sm"
      />

      <u-btn
        label="Button"
        class="outline color-dark"
      />

      <u-btn
        label="Button"
        class="soft color-dark text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill color-dark rounded-none"
      />

      <u-btn
        label="Button"
        class="fill color-dark rounded"
      />

      <u-btn
        label="Button"
        class="fill color-dark rounded-xl"
      />

      <u-btn
        label="Button"
        class="fill color-dark rounded-full"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Loading
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        class="fill color-dark"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill color-success"
        loading
      />
      
      <u-btn
        icon="i-mdi-account"
        class="fill color-blue"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="outline color-dark"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="ghost color-red"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="text color-dark"
        loading
      />

    </div>

  </div>
</template>