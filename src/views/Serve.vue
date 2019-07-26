<template>
  <div>
    <div class="formBtn" @click="gotoForm">表单</div>
  </div>
</template>
<script>
export default {
  name: "serve",
  components: {},
  data() {
    return {
      
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    gotoForm() {
      this.$router.push({
        name: "formItem"
      });
    }
  }
};
</script>
<style lang="less">
.formBtn {
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
</style>


