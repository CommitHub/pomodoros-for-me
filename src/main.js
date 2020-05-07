import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "./registerServiceWorker";
import firebaseConfig from "./firebase/firebaseConfig.js";

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("pomodoros")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      console.log(doc.data())
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
