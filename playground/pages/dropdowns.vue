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
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Button
        <u-dropdown placement="top">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Button
        <u-dropdown placement="left">
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
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

      <u-btn>
        Click
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
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

      <u-btn>
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

      <u-btn>
        Markup
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            This is a text with a <strong>Bold Section</strong> and an <i class="i-mdi-account inline-block -mb-1" />
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
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

      <u-btn>
        No Persist
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Full Persist
        <u-dropdown persist>
          <div class="bg-white text-dark p-2 border shadow rounded-lg">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
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