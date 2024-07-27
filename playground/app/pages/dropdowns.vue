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
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-dropdown placement="top">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-dropdown placement="left">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Button
        <u-dropdown placement="right">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Trigger
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        Click
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Hover
        <u-dropdown trigger="hover">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Content
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        Multiline Text
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            <p>
              One paragraph of text
            </p>
            <p>
              Two paragraph of text
            </p>
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Markup
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            This is a text with a <strong>Bold Section</strong> and an <i class="i-mdi-account" />
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Image
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            <p>
              This is a text
            </p>
            <img src="https://picsum.photos/200/100" class="block rounded-lg mt-1" />
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="text-xl font-bold mt-6">
      Persist
    </div>

    <div class="flex gap-2 mt-3">

      <u-btn class="fill neutral">
        No Persist
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Full Persist
        <u-dropdown persist>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn class="fill neutral">
        Content Persist
        <u-dropdown persist="content">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

  </div>
</template>