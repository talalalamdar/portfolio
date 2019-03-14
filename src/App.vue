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
