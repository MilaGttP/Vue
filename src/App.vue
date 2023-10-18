<template>
  <div class="App">
    <Timer v-for="(timer, index) in timers" :key="index" :name="timer.name" />
  </div>
</template>

<script>
import Timer from './components/clock.vue';
import axios from 'axios';

export default {
  components: {
    Timer
  },
  data() {
    return {
      timers: []
    };
  },
  methods: {
    loadTimerData() {
      axios.get('/api/timers')
        .then(response => {
          this.timers = response.data;
        })
        .catch(error => {
          console.error('Помилка завантаження даних про таймери:', error);
        });
    }
  },
  created() {
    this.loadTimerData();
  }
};
</script>
