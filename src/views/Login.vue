<template>
  <div class="loginContainer">
    <div class="firstPicture">
      <div class="firstChild">
        <img src="../assets/images/login/login.png" alt />
      </div>
    </div>
    <div class="formBox">
      <mu-container>
        <mu-form ref="form" :model="validateForm" class="mu-demo-form">
          <mu-form-item label="用户名" prop="username" :rules="usernameRules">
            <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-button color="primary" @click="submit">登录</mu-button>
            <mu-button @click="clear">重置</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
    <div class="footer">
      <div class="title">版权所有</div>
      <div class="english">Copyright</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      validateForm: {
        username: "admin",
        password: "111111"
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.validateForm)
            .then(() => {
              // if (this.$route.query.redirect) {
              //   //     let redirect = decodeURIComponent(this.$route.query.redirect);
              //   let redirect = this.$route.query.redirect;
              //   this.$router.push(redirect);
              // } else {
              //   this.$router.push("/");
              // }

              this.$router.push({
                name: "index"
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: ""
      };
    }
  }
};
</script>
<style lang="less">
@import "../assets/iconfont/iconfont.css";
.loginContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #404040;
  .firstPicture {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    .firstChild {
      width: 490px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .formBox {
    width: 80%;
    margin: 0 auto;
  }
  .footer {
    width: 100%;
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: 28px;
      letter-spacing: 5px;
      color: #41cac0;
    }
    .english {
      font-size: 16px;
      color: #d2d2d2;
    }
  }
}
</style>
