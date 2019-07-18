<template>
  <div class="myContainer">
    <header class="header-box">
      <i class="iconfont iconfanhui1 iconReturn" @click="returnClick"></i>
      <div class="headerTitle">个人中心</div>
    </header>
    <div class="content">
      <div class="userInfo">
        <div class="user-name">
          <div class="user-name-left">
            <span class="name">王斌</span>
            <span class="department">技术部</span>
          </div>
          <div class="user-name-right">
            <span class="tel">186****6789</span>
            <span class="position">Java工程师</span>
          </div>
        </div>
        <div class="user-head">
          <img src="../assets/images/userInfo/head@2x.png" alt />
        </div>
      </div>
      <div class="tabs">
        <div class="tabsItem" v-for="(item,index) in tabs" :key="index">
          <div class="imgBox">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="txt">{{item.txt}}</div>
        </div>
      </div>
      <div class="list">
        <div class="listItem" v-for="(item, index) in list" :key="index">
          <i class="iconfont list-icon" :class="item.icon"></i>
          <div class="list-text">
            <span class="txt">
              {{item.txt}}
              <span class="cir"></span>
            </span>
          </div>
          <i class="iconfont iconjinru list-skip"></i>
        </div>
      </div>
      <div class="list">
        <div class="listItem">
          <i class="iconfont list-icon iconbianzu1"></i>
          <div class="list-text">
            <span class="txt">
              服务热线
              <span class="cir"></span>
            </span>
          </div>
          <i class="iconfont iconjinru list-skip"></i>
        </div>
      </div>
    </div>
    <!-- <div class="loginBtn" @click="gotoLogin">登录</div>
    <div class="logout" @click="logout">退出</div>-->
  </div>
</template>
<script>
export default {
  name: "my",
  components: {},
  data() {
    return {
      tabs: [
        {
          imgUrl: require("../assets/images/userInfo/aircraft@2x.png"),
          txt: "机票订单"
        },
        {
          imgUrl: require("../assets/images/userInfo/hotel@2x.png"),
          txt: "酒店订单"
        },
        {
          imgUrl: require("../assets/images/userInfo/train@2x.png"),
          txt: "火车票订单"
        },
        {
          imgUrl: require("../assets/images/userInfo/car@2x.png"),
          txt: "用车订单"
        }
      ],
      list: [
        {
          icon: "iconbianzu6",
          txt: "我的差旅政策"
        },
        {
          icon: "iconbianzu2",
          txt: "待报销"
        },
        {
          icon: "iconbianzu3",
          txt: "我的报销人"
        },
        {
          icon: "iconFill",
          txt: "我的关注航班"
        },
        {
          icon: "iconbianzu5",
          txt: "我的值班记录"
        },
        {
          icon: "iconbianzu4",
          txt: "行走记忆"
        }
      ]
    };
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
    returnClick() {
      this.$router.go(-1)
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>
<style lang="less">
@import "../assets/iconfont/iconfont.css";
@import "../assets/common/common.css";
.myContainer {
  width: 100%;
  background: #f2f2f2;
  .content {
    width: 100%;
    margin-top: 112px;
    margin-bottom: 100px; 
    .userInfo {
      width: 100%;
      padding: 50px 36px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .user-name {
        width: calc(100% - 120px);
        height: 120px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .user-name-left {
          width: 200px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .name {
            font-size: 40px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: #333333;
          }
          .department {
            font-size: 30px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #999999;
          }
        }
        .user-name-right {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .tel {
            font-size: 40px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: #333333;
          }
          .position {
            font-size: 30px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #999999;
          }
        }
      }
      .user-head {
        width: 120px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
        }
      }
    }
    .tabs {
      width: calc(100% - 30px);
      height: auto;
      padding: 40px 0;
      margin: 0 auto;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .tabsItem {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .imgBox {
          width: 82px;
          height: 82px;
          img {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
        .txt {
          margin-top: 15px;
          font-size: 26px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333;
        }
      }
    }
    .list {
      width: calc(100% - 30px);
      height: auto;
      margin: 15px auto;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .listItem {
        width: calc(100% - 60px);
        height: 105px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .list-icon {
          width: 40px;
          height: 100%;
          font-size: 32px;
          color: #333;
          display: flex;
          justify-content: left;
          align-items: center;
        }
        .list-text {
          flex: 1;
          padding: 0 30px;
          font-size: 32px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333;
          .txt{
            position: relative;
            .cir{
              display: inline-block;
              width: 13px;
              height: 13px;
              border-radius: 50%;
              background: #f00;
              position: absolute;
              top: -5px;
              right: -20px;
            }
          }
        }
        .list-skip {
          width: 40px;
          height: 100%;
          font-size: 32px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333;
          display: flex;
          justify-content: right;
          align-items: center;
        }
      }
      .listItem:last-child {
        border-bottom: none;
      }
    }
  }
}
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

