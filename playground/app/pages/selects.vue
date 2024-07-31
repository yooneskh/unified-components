<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 mt-3">

      <u-select
        label="Simple Input"
        :items="[
          { value: 'male', title: 'Male' },
          { value: 'female', title: 'Female' },
          { value: 'other', title: 'Other' },
        ]"
        placeholder="Select value"
        icon="i-mdi-account"
        inner-icon="i-mdi-home"
        append-inner-icon="i-mdi-cash"
        append-icon="i-mdi-check"
        message="hello"
      />

      <u-select
        label="Simple Input"
        :items="[
          { value: 'male', title: 'Male' },
          { value: 'female', title: 'Female' },
          { value: 'other', title: 'Other' },
        ]"
        placeholder="Select value"
        icon="i-mdi-account"
        inner-icon="i-mdi-home"
        append-inner-icon="i-mdi-cash"
        append-icon="i-mdi-check"
        message="hello"
        disabled
      />

    </div>

  </div>
</template>