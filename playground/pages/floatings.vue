<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Placement
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn>
        Button
        <u-tooltip>
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn>
        Button
        <u-tooltip placement="top">
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn class="ml-15">
        Button
        <u-tooltip placement="left">
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn>
        Button
        <u-tooltip placement="right">
          Hello
        </u-tooltip>
      </u-btn>

    </div>

  </div>
</template>