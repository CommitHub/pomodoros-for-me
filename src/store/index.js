import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    loggedIn: false
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
      state.loggedIn = true;
    },
    removeUser(state) {
      state.user = {};
      state.loggedIn = false;
    }
  }
});

export default store;
