<template>
  <div id="app">
    <nav>
      <a href="/">Home</a>
      <a href="/metrics">Metrics</a>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
@import "./styles/variables.scss";
@import "./styles/reset.scss";

#app {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
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
</style>
