<template>
  <div class="timer">
    <h1>Таймер ({{ name }})</h1>
    <div class="time-display">
      <p>Дата: {{ currentDate }}</p>
      <p>Час: {{ time }}</p>
    </div>
    <div class="buttons">
      <button v-if="!isRunning" class="start-button" @click="startTimer">Пуск</button>
      <button v-else class="stop-button" @click="stopTimer">Стоп</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone';
import 'moment-timezone';

export default {
  name: 'TimerDisplay',
  props: {
    name: String
  },
  data() {
    return {
      isRunning: false,
      time: this.getCurrentTime(this.name),
      currentDate: this.getCurrentDate(this.name)
    };
  },
  methods: {
    getCurrentTime(timezone) {
      return moment.tz(new Date(), timezone).format('HH:mm:ss');
    },
    getCurrentDate(timezone) {
      return moment.tz(new Date(), timezone).format('YYYY-MM-DD');
    },
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
          this.time = this.getCurrentTime(this.name);
          this.currentDate = this.getCurrentDate(this.name);
        }, 1000);
      }
    },
    stopTimer() {
      if (this.isRunning) {
        clearInterval(this.timerInterval);
        this.isRunning = false;
      }
    } ,
    beforeUnmount() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
    }
  }
};
</script>

<style scoped>
    @import './../styles.css';
</style>>