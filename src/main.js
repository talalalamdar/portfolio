import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import VAnimateCss from 'v-animate-css';
import EvaIcons from 'vue-eva-icons'

import './styles.css'


Vue.config.productionTip = false
Vue.use(VueScrollactive)
Vue.use(VAnimateCss);
Vue.use(EvaIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')
