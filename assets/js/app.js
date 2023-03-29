const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    mounted() {
      const myTimer = setInterval(() => {
      }, 3000);
    }
  }).mount('#app')