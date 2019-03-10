<template>
  <div id="app">
    <Main :data="data"/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import data from "./db/data.json"

export default {
  name: "app",
  components: {
    Main
  },
  data() {
    return {
      data: data
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
