<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 mt-3">

      <u-radios
        label="Simple Input"
        :items="[
          { value: 'male', title: 'Male' },
          { value: 'female', title: 'Female' },
          { value: 'other', title: 'Other' },
        ]"
        placeholder="Select value"
        message="hello"
      />

    </div>

  </div>
</template>