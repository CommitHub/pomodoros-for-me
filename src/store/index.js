import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    addUser(state, payload) {
      this.state.user = payload;
    },
    logOut(state) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.state.user = {};
        });
    }
  }
});

export default store;
