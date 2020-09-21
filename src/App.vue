<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
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
  margin-top: 2rem;
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
</style>
