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
  <div>

    <u-typography
      title="Buttons"
    />

    <div class="space-x-2 mt-2">

      <u-btn
        label="Default (Fill)"
      />

      <u-btn
        label="Fill"
        class="fill neutral"
      />

      <u-btn
        label="Outline"
        class="outline neutral"
      />

      <u-btn
        label="Soft"
        class="soft neutral"
      />

      <u-btn
        label="Ghost"
        class="ghost neutral"
      />

      <u-btn
        label="Link"
        class="link neutral"
      />

      <u-btn
        label="Text"
        class="text neutral"
      />

    </div>

    <div class="space-x-2 mt-2">

      <u-btn
        label="Default (Neutral)"
      />

      <u-btn
        label="Neutral"
        class="fill neutral"
      />

      <u-btn
        label="Primary"
        class="fill primary"
      />

      <u-btn
        label="Success"
        class="soft success"
      />

      <u-btn
        label="Error"
        class="ghost danger"
      />

      <u-btn
        label="Error"
        class="link danger"
      />

    </div>

    <div class="space-x-2 mt-2">

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill neutral"
      />

      <u-btn
        label="Button"
        append-icon="i-mdi-account"
        class="outline neutral"
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        append-icon="i-mdi-plus"
        class="soft neutral"
      />

      <u-btn
        icon="i-mdi-account"
        class="ghost neutral"
      />

      <u-btn
        icon="i-mdi-account"
        class="soft neutral">
        <!-- empty default content to check for bug -->
      </u-btn>

      <u-btn
        icon="i-mdi-account"
        class="soft neutral">
        <u-dropdown>
          <u-card>
            Hello
          </u-card>
        </u-dropdown>
      </u-btn>

      <u-btn
        icon="i-mdi-account"
        class="soft neutral">
        <u-tooltip text="Tooltip" />
      </u-btn>

      <u-btn
        icon="i-mdi-plus"
        class="link neutral"
      />

    </div>

    <div class="flex gap-2 mt-2 items-start">

      <u-btn
        class="fill neutral text-sm">
        Button
      </u-btn>

      <u-btn
        label="Button"
        class="fill neutral"
      />

      <u-btn
        label="Button"
        class="fill neutral text-xl"
      />

    </div>

    <div class="flex gap-2 mt-2 items-start">

      <u-btn
        label="Button"
        class="fill neutral rounded-none"
      />

      <u-btn
        label="Button"
        class="fill neutral rounded"
      />

      <u-btn
        label="Button"
        class="fill neutral rounded-xl"
      />

      <u-btn
        label="Button"
        class="fill neutral rounded-full"
      />

    </div>

    <div class="flex gap-2 mt-2 items-start">

      <u-btn
        label="Button"
        class="fill neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="fill primary"
        loading
      />
      
      <u-btn
        icon="i-mdi-account"
        class="fill neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="outline neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="ghost neutral"
        loading
      />

      <u-btn
        label="Button"
        icon="i-mdi-account"
        class="text neutral"
        loading
      />

    </div>

    <div class="flex gap-2 mt-2 items-start">

      <u-btn
        label="Non Async"
        class="fill neutral"
        :click-handler="() => console.log('was clicked')"
      />

      <u-btn
        label="Async (2 Sec)"
        class="fill neutral"
        :click-handler="onClickHandler"
      />

      <u-btn
        label="Async Error (2 Sec)"
        class="fill neutral"
        :click-handler="onClickHandlerError"
      />

    </div>

    <div class="flex gap-2 mt-2 items-start">

      <u-btn
        label="Disabled"
        class="fill neutral"
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