<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Radios"
    />

    <div class="mt-2">

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