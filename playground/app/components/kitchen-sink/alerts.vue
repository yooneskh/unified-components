<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Alerts"
    />

    <div class="space-y-2 mt-2">

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