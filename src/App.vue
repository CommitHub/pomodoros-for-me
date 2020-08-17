<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register" v-if="!loggedIn">Register</router-link>
      <router-link to="/login" v-if="!loggedIn">Login</router-link>
      <a href="/" v-if="loggedIn" v-on:click="logout">
        Logout
      </a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("addUser", {
          name: user.displayName,
          email: user.email
        });
      }
    });
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
          this.$store.commit("removeUser");
        });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import "./styles/variables.scss";

#app {
  font-family: "Arvo", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $main-font-color;
}

body {
  background-color: $main-background-color-dark;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.4em;
}

h4 {
  font-size: 1em;
}

h5 {
  font-size: 0.86em;
}

h6 {
  font-size: 0.67em;
}

nav {
  background-color: $success;
  padding: 1rem;
  margin-bottom: 2rem;

  a {
    color: $main-font-color;
    font-size: 1.5rem;
    margin: 0 1rem;
    text-decoration: none;
  }
}

.page-container {
  padding: 2rem;
}
</style>
