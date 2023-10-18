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
import axios from 'axios';

export default {
  name: 'TimerDisplay',
  props: {
    name: String
  },
  data() {
    return {
      isRunning: false,
      time: this.getCurrentTime(),
      currentDate: this.getCurrentDate(),
      offset: 0
    };
  },
  methods: {
    getCurrentTime() {
      const currentTime = new Date().getTime() + this.offset * 3600 * 1000;
      return new Date(currentTime).toLocaleTimeString();
    },
    getCurrentDate() {
      const currentDate = new Date().getTime() + this.offset * 3600 * 1000;
      return new Date(currentDate).toLocaleDateString();
    },
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
          this.time = this.getCurrentTime();
          this.currentDate = this.getCurrentDate();
        }, 1000);
      }
    },
    stopTimer() {
      if (this.isRunning) {
        clearInterval(this.timerInterval);
        this.isRunning = false;
      }
    },
    loadTimerData() {
      axios.get('/api/timers')
        .then(response => {
          const timerData = response.data.find(timer => timer.name === this.name);
          if (timerData) {
            this.offset = timerData.offset;
          }
        })
        .catch(error => {
          console.error('Помилка завантаження даних про таймер:', error);
        });
    }
  },
  created() {
    this.loadTimerData();
  },
  beforeUnmount() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
};
</script>
