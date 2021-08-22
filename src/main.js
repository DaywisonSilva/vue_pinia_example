import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import {createPinia, PiniaPlugin} from 'pinia'

Vue.config.productionTip = false
Vue.use(PiniaPlugin)
Vue.use(VueCompositionApi);
const pinia = createPinia()

new Vue({
  render: h => h(App),
  pinia
}).$mount('#app')
