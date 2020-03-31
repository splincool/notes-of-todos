<template>
  <div id="app">
    <router-view/>
    <Popup />
  </div>
</template>

<script>
import Popup from '@/components/Popup.vue'

export default {
  name: "App",
  components: {
    Popup
  }
}
</script>

<style lang="scss">
html {
  background: #f2f3f5;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 1200px;
}
</style>
