<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-y-8 mt-3">

      <u-card
        title="Hello Card"
        subtitle="Wednesday"
        text="This is a simple card for you."
      />

      <u-card
        text="This is a simple card for you."
      />

      <u-card
        title="Hello Card"
        subtitle="Wednesday"
        text="This is a simple card for you."
        icon="i-mdi-account"
      />

      <u-card
        title="Hello Card"
        subtitle="Wednesday"
        text="This is a simple card for you."
        icon="i-mdi-account">

        <template #append>
          <u-btn class="fill neutral">
            Action
          </u-btn>
        </template>

      </u-card>

      <u-card
        title="Hello Card"
        subtitle="Wednesday"
        text="This is a simple card for you."
        icon="i-mdi-account"
        class="outline interactive"
      />

    </div>

  </div>
</template>