<template>
  <div class="wyMyContainer">
    <header class="header-box">
      <i class="iconfont iconfanhui1 iconReturn" @click="returnPrev"></i>
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
          <img src="../../assets/images/userInfo/head@2x.png" alt />
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
    </div>
    <div class="bottomTabbar">
      <div class="barItem" @click="gotoIndex">
        <i class="iconfont iconshouye3 ico"></i>
        <span class="text">首页</span>
      </div>
      <div class="barItem" @click="gotoTrip">
        <i class="iconfont iconchuchashenqing ico"></i>
        <span class="text">出差申请</span>
      </div>
      <div class="barItem">
        <i class="iconfont iconbaoxiao ico"></i>
        <span class="text">报销管理</span>
      </div>
      <div class="barItem">
        <i class="iconfont iconfuwu1 ico"></i>
        <span class="text">服务热线</span>
      </div>
      <div class="barItem">
        <i class="iconfont iconwode3 ico"></i>
        <span class="text textSelect">个人中心</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wyMy",
  components: {},
  data() {
    return {
      tabs: [
        {
          imgUrl: require("../../assets/images/userInfo/order_air.png"),
          txt: "机票订单"
        },
        {
          imgUrl: require("../../assets/images/userInfo/order_hotel.png"),
          txt: "酒店订单"
        },
        {
          imgUrl: require("../../assets/images/userInfo/order_train.png"),
          txt: "火车票订单"
        },
        {
          imgUrl: require("../../assets/images/userInfo/order_car.png"),
          txt: "用车订单"
        }
      ],
      list: [
        {
          icon: "iconchalv",
          txt: "我的差旅政策"
        },
        {
          icon: "iconchuchadan",
          txt: "我的出差申请单"
        },
        {
          icon: "iconbaoxiaoren",
          txt: "我的报销人"
        },
        {
          icon: "iconbaoliupiao",
          txt: "我的保留票（2张）"
        },
        {
          icon: "iconhangban",
          txt: "我的关注航班"
        },
        {
          icon: "iconzhiban",
          txt: "我的值班记录"
        },
        {
          icon: "iconhangzou",
          txt: "行走记忆"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    gotoIndex() {
      this.$router.push({ name: "wyIndex" });
    },
    gotoTrip() {
      this.$router.push({ name: "wyTripManage" });
    },
    returnPrev() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
@import "../../assets/iconfont/iconfont.css";
@import "../../assets/common/common.css";
.wyMyContainer {
  width: 100%;
  // background: #f2f2f2;
  .content {
    width: 100%;
    margin-top: 112px;
    margin-bottom: 110px;
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
      border-radius: 12px;
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
          width: 51px;
          height: 51px;
          img {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
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
          .txt {
            position: relative;
            .cir {
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
  .bottomTabbar {
    width: 100%;
    height: 98px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 5px 7px 3px rgba(184, 184, 184, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .barItem {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .ico {
        font-size: 40px;
        color: #797979;
      }
      .ico.iconwode3 {
        color: #68b6ff;
      }
      .text {
        font-size: 20px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(121, 121, 121, 1);
      }
      .text.textSelect {
        color: #68b6ff;
      }
    }
  }
}
</style>

