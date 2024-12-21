<script setup>

const d1 = ref(false);
const d2 = ref(false);
const d3 = ref(false);
const d4 = ref(false);

</script>


<template>
  <div class="space-y-2">

    <u-typography
      title="Dialogs"
    />

    <div class="space-x-2">

      <u-btn
        label="Simple"
        @click="d1 = !d1;"
      />

      <u-dialog v-model="d1">
        <u-card class="min-h-xs min-w-md flex flex-col items-center justify-center">
          <p>
            Hello There!
          </p>
          <u-btn class="mt-2">
            A Button With Tooltip!
            <u-tooltip text="Hello!" />
          </u-btn>
        </u-card>
      </u-dialog>

      <u-btn
        label="Nested Dialogs"
        @click="d2 = !d2;"
      />

      <u-dialog v-model="d2">
        <u-card class="min-h-xs min-w-md flex flex-col items-center justify-center">
          <u-btn
            label="Open Next"
            @click="d3 = !d3;"
          />
        </u-card>
      </u-dialog>

      <u-dialog v-model="d3">
        <u-card class="min-h-xs min-w-md flex flex-col items-center justify-center">
          <p>
            Nested dialog with a tooltip!
            <u-tooltip text="The Tooltip!" />
          </p>
        </u-card>
      </u-dialog>

      <u-btn
        label="Stick To Bottom"
        @click="d4 = !d4;"
      />

      <u-dialog backdrop-classes="pb-0" container-classes="self-end" v-model="d4">
        <u-card class="min-h-xs min-w-md flex flex-col items-center justify-center rounded-b-none">
          This sticks to bottom!
        </u-card>
      </u-dialog>

    </div>

  </div>
</template>