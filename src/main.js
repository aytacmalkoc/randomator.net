import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import device from 'vue-device-detector'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import VueClipboard from 'vue-clipboard2'

import '@/assets/js/fontawesome'

Vue.use(device)
Vue.use(VueMeta)
Vue.use(Vuelidate)
Vue.use(VueClipboard)
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    api_url: url => process.env.VUE_APP_API_URL + url
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
