import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component("v-icon", Icon);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
