<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Dropdowns"
    />

    <div class="flex gap-2 mt-2">

      <u-btn>
        Default
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Top
        <u-dropdown placement="top">
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Left
        <u-dropdown placement="left">
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Right
        <u-dropdown placement="right">
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="flex gap-2 mt-2">

      <u-btn>
        Click
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Hover
        <u-dropdown trigger="hover">
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="flex gap-2 mt-2">

      <u-btn>
        Multiline Text
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow">
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
          <div class="bg-white text-dark p-2 border shadow">
            This is a text with a <strong>Bold Section</strong> and an <i class="i-mdi-account" />
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Image
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow">
            <p>
              This is a text
            </p>
            <img src="https://picsum.photos/200/100" class="block mt-1" />
          </div>
        </u-dropdown>
      </u-btn>

    </div>

    <div class="flex gap-2 mt-2">

      <u-btn>
        No Persist
        <u-dropdown>
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Full Persist
        <u-dropdown persist>
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

      <u-btn>
        Content Persist
        <u-dropdown persist="content">
          <div class="bg-white text-dark p-2 border shadow">
            Hello
          </div>
        </u-dropdown>
      </u-btn>

    </div>

  </div>
</template>