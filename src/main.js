import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import VAnimateCss from 'v-animate-css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './styles.css'

library.add(faCoffee, faJs, faVuejs)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueScrollactive)
Vue.use(VAnimateCss);

new Vue({
  render: h => h(App),
}).$mount('#app')
