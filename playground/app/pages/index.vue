<script setup>

/* page */

definePageMeta({
  name: 'general.home',
});

useHead({
  title: 'Home',
});


/* template */

</script>


<template>
  <div class="p-4 flex gap-3 flex-wrap">

    <nuxt-link to="/buttons">
      <u-btn class="fill neutral">
        Buttons
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/icons">
      <u-btn class="fill neutral">
        Icons
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/chips">
      <u-btn class="fill neutral">
        Chips
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/dropdowns">
      <u-btn class="fill neutral">
        Dropdowns
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/floatings">
      <u-btn class="fill neutral">
        Floatings
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/tooltips">
      <u-btn class="fill neutral">
        Tooltips
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/dialogs">
      <u-btn class="fill neutral">
        Dialogs
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/inputs">
      <u-btn class="fill neutral">
        Inputs
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/tag-inputs">
      <u-btn class="fill neutral">
        Tag Inputs
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/textareas">
      <u-btn class="fill neutral">
        Textareas
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/checkboxes">
      <u-btn class="fill neutral">
        Checkboxes
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/selects">
      <u-btn class="fill neutral">
        Selects
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/radios">
      <u-btn class="fill neutral">
        Radios
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/typographies">
      <u-btn class="fill neutral">
        Typographies
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/cards">
      <u-btn class="fill neutral">
        Cards
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/alerts">
      <u-btn class="fill neutral">
        Alerts
      </u-btn>
    </nuxt-link>

  </div>
</template>