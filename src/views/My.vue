<template>
  <div>
    <div class="loginBtn" @click="gotoLogin">登录</div>
    <div class="logout" @click="logout">退出</div>
  </div>
</template>
<script>
export default {
  name: "my",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    gotoLogin() {
      this.$router.push({
        name: "login"
      });
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
};
</script>
<style lang="less">
.loginBtn {
  width: 500px;
  height: 100px;
  border-radius: 10px;
  font-size: 30px;
  color: #fff;
  margin: 300px auto;
  background: linear-gradient(160deg, #b100ff 20%, #00b3ff 80%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logout {
  width: 500px;
  height: 100px;
  border-radius: 10px;
  font-size: 30px;
  color: #555;
  margin: 0 auto;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

