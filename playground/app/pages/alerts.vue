<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-y-8 mt-3">

      <u-alert
        text="This is a simple alert for you. (Default)"
      />

      <u-alert
        text="This is a simple alert for you."
        icon="i-mdi-account"
        class="text-xl"
      />

      <u-alert
        text="This is a simple alert for you."
        icon="i-mdi-account"
        class="primary"
      />

      <u-alert
        text="This is a simple alert for you."
        icon="i-mdi-account"
        class="outline danger interactive"
      />

    </div>

  </div>
</template>