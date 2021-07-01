import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
new Vue({
  render: h => h(App),
}).$mount('#app')
