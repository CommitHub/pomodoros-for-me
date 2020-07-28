import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    addUser(state, payload) {
      this.state.user = payload;
    }
  }
});

export default store;
