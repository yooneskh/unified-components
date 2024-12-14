<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Selects"
    />

    <div class="space-y-2 mt-2">

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