import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
    removeUser(state) {
      state.user = {};
    }
  }
});

export default store;
