import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import store from "./store/index";

Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount("#app");
