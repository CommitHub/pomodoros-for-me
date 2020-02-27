import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Sentry.init({
  dsn: "https://86f9ca147a83490b898e53921c31ad25@sentry.io/3081852",
  integrations: [
    new Integrations.Vue({ Vue, attachProps: true, logErrors: true })
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
