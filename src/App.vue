<script>
  import '@/assets/scss/app.scss'

  import AppHeader from '@/components/shared/AppHeader.vue'
  import AppFooter from '@/components/shared/AppFooter.vue'
  export default {
    name: 'App',
    metaInfo: {
      title: 'Homepage',
      titleTemplate: '%s - randomator.net',
      meta: [
        {
          name: 'description',
          content: 'my standard description',
        }
      ]
    },
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<template>
  <div class="app" id="app">
    <div class="container">

      <app-header />

      <router-view></router-view>

      <app-footer />

    </div>
  </div>
</template>