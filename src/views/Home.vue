<template>
  <div class="home">
    <h1>Pomodoros For Me</h1>
    <Timer />
    <Footer />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Timer,
    Footer
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
