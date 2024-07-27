<script setup>

const d1 = ref(false);
const d2 = ref(false);
const d3 = ref(false);
const d4 = ref(false);

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Modes
    </div>

    <div class="space-x-2 mt-3">

      <u-btn
        label="Simple"
        class="fill neutral"
        @click="d1 = !d1;"
      />

      <u-dialog v-model="d1">
        <div class="p-20 bg-white rounded-md text-center">
          <p>
            Hello There!
          </p>
          <u-btn class="fill neutral mt-2">
            A Button With Tooltip!
            <u-tooltip text="Hello!" />
          </u-btn>
        </div>
      </u-dialog>

      <u-btn
        label="Nested Dialogs"
        class="fill neutral"
        @click="d2 = !d2;"
      />

      <u-dialog v-model="d2">
        <div class="p-20 bg-white rounded-md text-center">
          <u-btn
            label="Open Next"
            class="fill neutral"
            @click="d3 = !d3;"
          />
        </div>
      </u-dialog>

      <u-dialog v-model="d3">
        <div class="p-20 bg-white rounded-md text-center">
          <p>
            Nested dialog with a tooltip!
            <u-tooltip text="The Tooltip!" />
          </p>
        </div>
      </u-dialog>

      <u-btn
        label="Stick To Bottom"
        class="fill neutral"
        @click="d4 = !d4;"
      />

      <u-dialog backdrop-classes="pb-0" container-classes="self-end" v-model="d4">
        <div class="p-20 bg-white rounded-t-2xl text-center">
          This sticks to bottom!
        </div>
      </u-dialog>

    </div>

  </div>
</template>