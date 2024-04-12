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
      <u-btn>
        Buttons
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/icons">
      <u-btn>
        Icons
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/chips">
      <u-btn>
        Chips
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/dropdowns">
      <u-btn>
        Dropdowns
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/floatings">
      <u-btn>
        Floatings
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/tooltips">
      <u-btn>
        Tooltips
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/dialogs">
      <u-btn>
        Dialogs
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/inputs">
      <u-btn>
        Inputs
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/textareas">
      <u-btn>
        Textareas
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/checkboxes">
      <u-btn>
        Checkboxes
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/selects">
      <u-btn>
        Selects
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/radios">
      <u-btn>
        Radios
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/typographies">
      <u-btn>
        Typographies
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/cards">
      <u-btn>
        Cards
      </u-btn>
    </nuxt-link>

    <nuxt-link to="/alerts">
      <u-btn>
        Alerts
      </u-btn>
    </nuxt-link>

  </div>
</template>