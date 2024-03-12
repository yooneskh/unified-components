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
  <div class="p-4 space-x-3">

    <nuxt-link to="/buttons">
      <u-btn>
        Buttons
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

  </div>
</template>