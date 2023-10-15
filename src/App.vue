<template>
  <div class="App">
    <Timer name="Europe/Kiev" />
    <Timer name="America/New_York" />
    <Timer name="Asia/Hong_Kong" />
  </div>
</template>

<script>
import Timer from './сomponents/timer.vue';

export default {
  components: {
    Timer
  }
};
</script>
