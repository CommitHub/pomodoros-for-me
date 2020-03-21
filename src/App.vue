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

body {
  background-color: $main-background-color-dark;
}
</style>
