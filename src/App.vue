<template>
  <div id="app">
    <router-view></router-view>
    <copyright></copyright>
  </div>
</template>

<script>
import copyright from './view/Copyright'
export default {
  name: 'app',
  components: {
    copyright
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
