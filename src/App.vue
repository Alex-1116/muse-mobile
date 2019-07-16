<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created: function() {
    this.$router.push("/index");
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
