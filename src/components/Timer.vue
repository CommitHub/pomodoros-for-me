<template>
  <div class="timer">
    <p class="time">{{ displayTime }}</p>
    <div class="btn-container">
      <div class="btn-division">
        <a
          class="btn success-btn"
          @click="startTimer(timePicked)"
        >
          Start
        </a>
        <a
          class="btn warning-btn"
        >
          Pause
        </a>
        <a
          class="btn danger-btn"
        >
          Stop
        </a>
      </div>
      <div class="btn-division">
        <a
          class="btn"
          @click="pickTime(shortBreakTime)"
        >
          Break
        </a>
        <a
          class="btn"
          @click="pickTime(lunchTime)"
        >
          Lunch
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      taskTime: 25,
      shortBreakTime: 5,
      longBreakTime: 20,
      lunchTime: 60,
      displayTime: '25:00',
      timePicked: null,
      pomodorosDone: 0
    };
  },
  mounted: function() {
    this.timePicked = this.taskTime;
  },
  methods: {
    startTimer: function(time) {
      const duration = 60 * time;
      let timer = duration, minutes, seconds;

      setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayTime = `${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration;
        }
      }, 1000);
    },
    pickTime: function(time) {
      this.timePicked = time;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/general-styles.scss";

.timer {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5rem auto;
  align-items: center;

  .time {
    font-size: 6rem;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 1rem 0 0 0;
  }

  .btn-division {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem 0;
  }
}
</style>
