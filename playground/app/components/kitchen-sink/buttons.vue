<script setup>

async function onClickHandler() {
  console.log('starting');
  await new Promise(r => setTimeout(r, 2000));
  console.log('finished');
}

async function onClickHandlerError() {
  console.log('starting');
  await new Promise((res, rej) => setTimeout(rej, 2000));
  console.log('finished');
}

</script>


<template>
  <div class="space-y-2">

    <u-typography
      title="Buttons"
    />

    <div class="space-x-2">

      <u-btn
        label="Default (Fill)"
      />

      <u-btn
        label="Fill"
        class="fill"
      />

      <u-btn
        label="Outline"
        class="outline"
      />

      <u-btn
        label="Soft"
        class="soft"
      />

      <u-btn
        label="Ghost"
        class="ghost"
      />

      <u-btn
        label="Link"
        class="link"
      />

      <u-btn
        label="Text"
        class="text"
      />

    </div>

    <div class="space-x-2">

      <u-btn
        label="Default (Neutral)"
      />

      <u-btn
        label="Neutral"
        class="neutral"
      />

      <u-btn
        label="Primary"
        class="primary"
      />

      <u-btn
        label="Success"
        class="soft success"
      />

      <u-btn
        label="Danger"
        class="ghost danger"
      />

      <u-btn
        label="Warning"
        class="link warning"
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Button"
        icon="i-mdi-account"
      />

      <u-btn
        label="Button"
        append-icon="i-mdi-account"
        class="outline"
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft"
      />

      <u-btn
        icon="i-mdi-account"
        class="ghost"
      />

      <u-btn
        icon="i-mdi-account"
        class="soft">
        <!-- empty default content to check for bug -->
      </u-btn>

      <u-btn
        icon="i-mdi-account"
        class="soft">
        <u-dropdown>
          <u-card>
            Hello
          </u-card>
        </u-dropdown>
      </u-btn>

      <u-btn
        icon="i-mdi-account"
        class="soft">
        <u-tooltip text="Tooltip" />
      </u-btn>

      <u-btn
        icon="i-mdi-plus"
        class="link"
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Button"
        class="text-sm"
      />

      <u-btn
        label="Button"
      />

      <u-btn
        label="Button"
        class="text-xl"
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Button"
        class="rounded-none"
      />

      <u-btn
        label="Button"
        class="rounded"
      />

      <u-btn
        label="Button"
        class="rounded-xl"
      />

      <u-btn
        label="Button"
        class="rounded-full"
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Button"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="primary"
        loading
      />
      
      <u-btn
        icon="i-mdi-account"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="outline"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="ghost"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="text"
        loading
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Non Async"
        :click-handler="() => console.log('was clicked')"
      />

      <u-btn
        label="Async (2 Sec)"
        :click-handler="onClickHandler"
      />

      <u-btn
        label="Async Error (2 Sec)"
        :click-handler="onClickHandlerError"
      />

    </div>

    <div class="flex gap-2 items-start">

      <u-btn
        label="Disabled"
        disabled
        @click="console.log('clicked');"
      />

      <u-btn
        label="Disabled"
        class="soft primary"
        disabled
        :click-handler="() => console.log('clicked')"
      />

      <u-btn
        label="Disabled"
        class="ghost danger"
        disabled
        :click-handler="() => console.log('clicked')"
      />

    </div>

  </div>
</template>