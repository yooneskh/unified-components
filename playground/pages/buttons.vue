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
        variant="fill"
        color="neutral"
      />

      <u-btn
        label="Outline"
        variant="outline"
        color="neutral"
      />

      <u-btn
        label="Soft"
        variant="soft"
        color="neutral"
      />

      <u-btn
        label="Ghost"
        variant="ghost"
        color="neutral"
      />

      <u-btn
        label="Link"
        variant="link"
        color="neutral"
      />

      <u-btn
        label="Text"
        variant="text"
        color="neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Colors
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Neutral"
        variant="fill"
        color="neutral"
      />

      <u-btn
        label="Primary"
        variant="fill"
        color="primary"
      />

      <u-btn
        label="Secondary"
        variant="outline"
        color="secondary"
      />

      <u-btn
        label="Success"
        variant="soft"
        color="success"
      />

      <u-btn
        label="Error"
        variant="ghost"
        color="error"
      />

      <u-btn
        label="Error"
        variant="link"
        color="error"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Icons
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Button"
        icon="i-mdi-account"
        variant="fill"
        color="neutral"
      />

      <u-btn
        label="Button"
        append-icon="i-mdi-account"
        variant="outline"
        color="neutral"
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        variant="soft"
        color="neutral"
      />

      <u-btn
        icon="i-mdi-account"
        variant="ghost"
        color="neutral"
      />

      <u-btn
        icon="i-mdi-plus"
        variant="link"
        color="neutral"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Sizes
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        variant="fill text-sm"
        color="neutral"
        class="text-sm"
      />

      <u-btn
        label="Button"
        color="neutral"
        variant="outline"
      />

      <u-btn
        label="Button"
        variant="soft"
        color="neutral"
        class="text-2xl"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Roundness
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        variant="fill"
        color="neutral"
        class="rounded-none"
      />

      <u-btn
        label="Button"
        variant="fill"
        color="neutral"
        class="rounded"
      />

      <u-btn
        label="Button"
        variant="fill"
        color="neutral"
        class="rounded-xl"
      />

      <u-btn
        label="Button"
        variant="fill"
        color="neutral"
        class="rounded-full"
      />

    </div>

    <div class="text-xl font-bold mt-4">
      Loading
    </div>

    <div class="flex gap-2 mt-3 items-start">

      <u-btn
        label="Button"
        variant="fill"
        color="neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        variant="fill"
        color="neutral"
        loading
      />
      
      <u-btn
        icon="i-mdi-account"
        variant="fill"
        color="neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        variant="outline"
        color="neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        variant="ghost"
        color="neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        variant="text"
        color="neutral"
        loading
      />

    </div>

  </div>
</template>