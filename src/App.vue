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
  created() {
    this.$router.push({path: '/'})
    if(localStorage) {
      let notes = localStorage.getItem('notes')
      if(notes && notes.length) {
        this.$store.dispatch('saveNotes', JSON.parse(notes))
      }
    }
  },
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
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 1200px;
}
.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 16px;
}
.primary-btn {
  background: #4299e1;
  &:hover {
    color: #fff;
    background: #2b6cb0;
  }
}
.delete-btn {
  background: #E53E3E;
  &:hover {
    color: #fff;
    background: #C53030;
  }
}
.btn-disabled {
  cursor: not-allowed;
  background: #4299e1;
  opacity: .5!important;
}

@media screen and (max-width: 1199px) {
  #app {
    width: 100%;
  }
}
</style>
