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
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
        Button
        <u-floater placement="top">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
        Button
        <u-floater placement="left">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
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

      <u-btn>
        Click
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
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

      <u-btn>
        No persist
        <u-floater>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
        Full Persist
        <u-floater persist>
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
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

      <u-btn>
        Simple
        <u-floater trigger="hover">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
        Hide Delay
        <u-floater trigger="hover" hide-delay="100">
          <div class="p-3 bg-white rounded-lg border shadow">
            Hello
          </div>
        </u-floater>
      </u-btn>

      <u-btn>
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