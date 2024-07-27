<script setup>

</script>


<template>
  <div class="pa-4">

    <div class="text-xl font-bold">
      Placement
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        Button
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-floater placement="top">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-floater placement="left">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-floater placement="right">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Trigger
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        Click
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Hover
        <u-floater trigger="hover">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Click Persist
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        No persist
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Full Persist
        <u-floater persist>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Content Persist
        <u-floater persist="content">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Hover Methods
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        Simple
        <u-floater trigger="hover">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Hide Delay
        <u-floater trigger="hover" hide-delay="100">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn class="fill neutral">
        Offset and Hide Delay
        <u-floater trigger="hover" hide-delay="100" offset="4">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

    </div>

  </div>
</template>