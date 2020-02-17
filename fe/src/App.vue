<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
@import "./styles/variables.scss";

#app {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $main-font-color;
}
#nav {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  a {
    padding: 0 2rem;
    font-weight: bold;
    color: $main-font-color;
    &.router-link-exact-active {
      color: $main-color;
    }
  }
}
</style>
