import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
