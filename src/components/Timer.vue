<template>
  <div class="timer">
    <p class="time">{{ displayTime }}</p>
    <p>{{ pomodorosDone }}</p>
    <div class="btn-container">
      <div class="btn-division">
        <a
          class="btn success-btn"
          @click="startTimer(currentTime)"
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
          @click="stopTimer"
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
      displayTime: null,
      currentTime: null,
      timer: null,
      pomodorosDone: 0,
      tookBreak: false
    };
  },
  mounted: function() {
    this.currentTime = this.taskTime;
    this.displayTime = this.formatTime(this.taskTime);
  },
  methods: {
    startTimer: function(time) {
      const duration = 60 * time;
      let timer = duration, minutes, seconds;

      if (this.timer) this.stopTimer();
      this.timer = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayTime = `${minutes}:${seconds}`;

        if (--timer < 0) {
          timer = duration;
          this.stopTimer();
        }
      }, 1000);
    },
    formatTime: function(time) {
      let duration = 60 * time;
      let minutes = parseInt(duration / 60, 10);
      let seconds = parseInt(duration % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${seconds}`;
    },
    calculateTime: function() {
      if (this.tookBreak) {
        this.tookBreak = false;
        this.currentTime = this.taskTime;
        this.displayTime = this.formatTime(this.taskTime);
      } else {
        this.tookBreak = true;
        this.pomodorosDone++;
        if ((this.pomodorosDone % 4) === 0) {
          this.currentTime = this.longBreakTime;
          this.displayTime = this.formatTime(this.longBreakTime);
        } else {
          this.currentTime = this.shortBreakTime;
          this.displayTime = this.formatTime(this.shortBreakTime);
        }
      }
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = false;
      this.calculateTime();
    },
    pickTime: function(time) {
      this.currentTime = time;
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
