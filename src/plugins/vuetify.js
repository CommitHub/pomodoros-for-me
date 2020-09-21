import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#3282b8", //$primary-color
        secondary: "#424242", //$secondary-color
        accent: "#21c6ce", //$accent-color
        error: "#c72c41", //$danger
        info: "#3282b8", //$normal
        success: "#29c7ac", //$success
        warning: "#FFC107" //$warning
      }
    }
  }
});
