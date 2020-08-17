import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInbox, faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

library.add(faInbox);
library.add(faBug);
library.add(faFontAwesome);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  vuetify,
  store: store
}).$mount("#app");
