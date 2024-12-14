<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Cards"
    />

    <div class="space-y-2 mt-2">

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
        class="primary"
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
        class="soft danger interactive"
      />

    </div>

  </div>
</template>