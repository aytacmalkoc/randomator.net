<script>
  import Generator from '@/components/pages/Generator.vue'
  export default {
    name: 'Home',
    components: {
      Generator
    },
  }
</script>

<template>
  <section class="section has-text-centered sizer welcomebox">
    <div class="columns">
      <div class="column is-full">
        <h1 class="title is-1 ml9 text-wrapper is-spaced">
          Generate with <br>
          <span class="has-text-primary letters">randomator!</span>
        </h1>
        <h2 class="subtitle is-6 has-text-grey-light">You can generate random passwords, numbers, words
          or texts with <span class="has-text-primary">randomator</span>.</h2>

        <generator />

      </div>
    </div>
  </section>
</template>