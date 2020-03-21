<template>
  <div class="timer">
    <p class="time">{{ displayTime }}</p>
    <h2 v-if="pomodorosDone">Pomodoros Done</h2>
    <div class="pomodoros-done">
      <img
        v-for="pomodoro in pomodorosDone"
        :key="pomodoro"
        src="@/assets/coffee.png"
        alt="coffee cup"
      />
    </div>
    <div class="btn-container">
      <div class="btn-division">
        <button class="btn success-btn" @click="startTimer">
          Start
        </button>
        <button class="btn warning-btn" @click="pauseTimer">
          Pause
        </button>
        <button class="btn danger-btn" @click="stopTimer">
          Stop
        </button>
      </div>
      <div class="btn-division">
        <button class="btn" @click="pickTime(taskTime)">
          Set Pomodoro
        </button>
        <button class="btn" @click="pickTime(shortBreakTime)">
          Short Break
        </button>
        <button class="btn" @click="pickTime(longBreakTime)">
          Long Break
        </button>
        <button class="btn" @click="pickTime(lunchTime)">
          Lunch Break
        </button>
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
      tookBreak: false,
      taskDone: false
    };
  },
  mounted: function() {
    this.currentTime = this.taskTime;
    this.displayTime = this.formatTime(this.taskTime);
  },
  methods: {
    startTimer: function() {
      const duration = 60 * this.currentTime;
      let timer = duration,
        minutes,
        seconds;

      if (this.timer) this.stopTimer();
      this.timer = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayTime = `${minutes}:${seconds}`;

        // If timer is done stop it
        if (--timer < 0) {
          timer = duration;
          this.taskDone = true;
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

        // Don't add a pomodoro if timer is not done
        if (this.taskDone) {
          this.taskDone = false;
          this.pomodorosDone++;
        }

        if (this.pomodorosDone % 4 === 0) {
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
      const audio = new Audio(require("@/assets/ding.wav"));
      audio.play();
    },
    pauseTimer: function() {
      const dividedTime = this.displayTime.split(":");
      // Divide seconds by 60 to get the accurate percentage
      const secondPercentage = parseInt(dividedTime[1]) / 60;
      // First item is minutes
      this.currentTime = parseInt(dividedTime[0]) + secondPercentage;
      clearInterval(this.timer);
      this.timer = false;
    },
    pickTime: function(time) {
      this.stopTimer();
      this.currentTime = time;
      this.displayTime = this.formatTime(time);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/general-styles.scss";

.timer {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;
  align-items: center;

  .time {
    font-size: 6rem;
  }

  .pomodoros-done {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 5rem;
      height: 5rem;
      margin: 1rem;
    }
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
