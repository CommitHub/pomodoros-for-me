<template>
  <div class="home">
    <h1>Pomodoros For Me</h1>
    <Timer />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";

export default {
  name: "home",
  components: {
    Timer
  }
};
</script>

<style lang="scss">
.home {
  h1 {
    text-align: center;
  }
}
</style>
