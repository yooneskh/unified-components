<script setup>

</script>


<template>
  <div>

    <u-typography
      title="Tooltips"
    />

    <div class="space-x-2 mt-2">

      <u-btn>
        Button
        <u-tooltip>
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn>
        Button
        <u-tooltip placement="bottom">
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn>
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

    <div class="space-x-2 mt-2">

      <u-btn>
        Click
        <u-tooltip trigger="click">
          Hello
        </u-tooltip>
      </u-btn>

      <u-btn>
        Hover
        <u-tooltip>
          Hello
        </u-tooltip>
      </u-btn>

    </div>

    <div class="space-x-2 mt-2">

      <u-btn>
        Simple Text Prop
        <u-tooltip text="Hello" />
      </u-btn>

      <u-btn>
        Multiline Text
        <u-tooltip>
          <p>
            One paragraph of text
          </p>
          <p>
            Two paragraph of text
          </p>
        </u-tooltip>
      </u-btn>

      <u-btn>
        Markup
        <u-tooltip>
          This is a text with a <strong>Bold Section</strong> and an <u-icon name="i-mdi-account" />
        </u-tooltip>
      </u-btn>

      <u-btn>
        Image
        <u-tooltip class="py-2">
          <p>
            This is a text
          </p>
          <img src="https://picsum.photos/200/100" class="block mt-1" />
        </u-tooltip>
      </u-btn>

    </div>

  </div>
</template>