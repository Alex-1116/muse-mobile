<template>
  <div class="settingsContainer">
    <div class="logout" @click="logout">退出</div>
  </div>
</template>
<script>
export default {
  name: "settings",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>
<style lang="less">
.settingsContainer {
  width: 100%;
  .logout {
    width: 500px;
    height: 100px;
    border-radius: 10px;
    font-size: 30px;
    color: #555;
    margin: 800px auto 0;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>


