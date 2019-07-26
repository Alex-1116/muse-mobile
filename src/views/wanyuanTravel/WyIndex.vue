<template>
  <div class="wyIndexContainer">
    <header class="header-box">
      <i class="iconfont iconfanhui1 iconReturn" @click="returnPrev"></i>
      <div class="headerTitle">万源差旅</div>
    </header>
    <div class="content">
      <div class="banner">
        <img src="../../assets/images/index/banner.png" alt />
      </div>
      <div class="tabs">
        <div class="tabsItem" v-for="(item,index) in tabs" :key="index">
          <div class="imgBox">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="txt">{{item.txt}}</div>
        </div>
      </div>
      <div class="tabs">
        <div class="tabsItem">
          <div class="imgBox">
            <img src="../../assets/images/index/approval.png" alt />
          </div>
          <div class="txt">审批</div>
        </div>
      </div>
      <div class="recentTrip">
        <div class="title">近日行程</div>
        <div class="recentTripContent">
          <div class="recentTripItem">
            <div class="recentchildNot item-not">
              <span class="text">您目前暂无行程</span>
              <img src="../../assets/images/index/not.png" alt />
            </div>
            <div class="recentchild item-air">
              <div class="ticketType">
                <div class="ticketType-left">
                  <img src="../../assets/images/index/trip_air.png" alt />
                  <span class="txt">机票</span>
                </div>
                <div class="ticketType-right">
                  <span>起飞：</span>
                  <span>2019-06-01 06:50:01</span>
                </div>
              </div>
              <div class="startEndPlace">
                <div class="startPlace">
                  <span class="city">北京</span>
                  <span class="site">首都T3</span>
                </div>
                <div class="arrow">
                  <span class="shifts">国航CA1607</span>
                </div>
                <div class="endPlace">
                  <span class="city">大连</span>
                  <span class="site">周水子</span>
                </div>
              </div>
            </div>
            <div class="recentchild item-train">
              <div class="ticketType">
                <div class="ticketType-left">
                  <img src="../../assets/images/index/trip_train.png" alt />
                  <span class="txt">火车票</span>
                </div>
                <div class="ticketType-right">
                  <span>出发：</span>
                  <span>2019-06-01 06:50:01</span>
                </div>
              </div>
              <div class="startEndPlace">
                <div class="startPlace">
                  <span class="city">北京</span>
                  <span class="site">北京站</span>
                </div>
                <div class="arrow">
                  <span class="shifts">D33</span>
                </div>
                <div class="endPlace">
                  <span class="city">大连</span>
                  <span class="site">大连站</span>
                </div>
              </div>
            </div>
            <div class="recentchild item-hotel">
              <div class="ticketType">
                <div class="ticketType-left">
                  <img src="../../assets/images/index/trip_hotel.png" alt />
                  <span class="txt">酒店</span>
                </div>
                <div class="ticketType-right">
                  <span>入住：</span>
                  <span>2019-06-01 至 2019-06-03</span>
                </div>
              </div>
              <div class="hotelPlaceBox">
                <div class="hotelPlace">
                  <span class="city">大连城堡酒店</span>
                  <span class="site">大连市沙河口区星海广场****号</span>
                </div>
              </div>
            </div>
            <div class="recentchild item-car">
              <div class="ticketType">
                <div class="ticketType-left">
                  <img src="../../assets/images/index/trip_car.png" alt />
                  <span class="txt">用车</span>
                </div>
                <div class="ticketType-right">
                  <span>出发：</span>
                  <span>2019-06-01 06:50:01</span>
                </div>
              </div>
              <div class="startEndPlace">
                <div class="startPlace">
                  <span class="city">大连站</span>
                  <span class="site">全程12km</span>
                </div>
                <div class="arrow">
                  <span class="shifts">接机</span>
                </div>
                <div class="endPlace">
                  <span class="city">大连城堡酒店</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomTabbar">
      <div class="barItem">
        <i class="iconfont iconshouye2 ico"></i>
        <span class="text textSelect">首页</span>
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
      <div class="barItem" @click="gotoMy">
        <i class="iconfont iconwode2 ico"></i>
        <span class="text">个人中心</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wyIndex",
  data() {
    return {
      tabs: [
        {
          imgUrl: require("../../assets/images/index/air.png"),
          txt: "机票订单"
        },
        {
          imgUrl: require("../../assets/images/index/hotel.png"),
          txt: "酒店订单"
        },
        {
          imgUrl: require("../../assets/images/index/train.png"),
          txt: "火车票订单"
        },
        {
          imgUrl: require("../../assets/images/index/car.png"),
          txt: "用车订单"
        }
      ]
    };
  },
  methods: {
    gotoMy() {
      this.$router.push({ name: "wyMy" });
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
.wyIndexContainer {
  width: 100%;
  // background: #F5F5F5;
  .content {
    width: 100%;
    margin-top: 112px;
    margin-bottom: 110px;
    position: relative;
    padding-top: 405px;
    .banner {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .tabs {
      width: calc(100% - 28px);
      height: auto;
      padding: 35px 0;
      margin: 0 auto 24px;
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
          width: 88px;
          height: 88px;
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
          color: rgba(51, 51, 51, 1);
        }
      }
    }
    .recentTrip {
      width: 100%;
      .title {
        width: calc(100% - 28px);
        margin: 0 auto 24px;
        font-size: 32px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
      }
      .recentTripContent {
        width: calc(100% - 28px);
        height: auto;
        margin: 0 auto;
        .recentTripItem {
          width: 100%;
          height: auto;
          .recentchildNot {
            width: 100%;
            height: 238px;
            border-radius: 12px;
            margin-bottom: 22px;
          }
          .item-not {
            background: rgba(255, 255, 255, 1);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100px;
              height: 100px;
              display: block;
              position: absolute;
              top: 0;
              right: 0;
            }
            .text {
              font-size: 30px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(211, 211, 211, 1);
            }
          }
          .recentchild {
            width: 100%;
            height: 238px;
            border-radius: 12px;
            margin-bottom: 22px;
            .ticketType {
              width: 100%;
              height: 95px;
              border-bottom: 1px solid #fff;
              padding: 0 28px;
              display: flex;
              justify-content: space-between;
              align-content: center;
              .ticketType-left {
                width: 200px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img {
                  width: 40px;
                  height: 40px;
                  display: block;
                  margin-right: 16px;
                }
                .txt {
                  font-size: 28px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: #fff;
                }
              }
              .ticketType-right {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span {
                  font-size: 26px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: #fff;
                }
              }
            }
            .startEndPlace {
              width: 100%;
              padding: 28px 70px;
              display: flex;
              justify-content: space-between;
              align-content: center;
              .startPlace {
                display: flex;
                justify-content: center;
                align-content: center;
                flex-direction: column;
                .city {
                  font-size: 36px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: #fff;
                }
                .site {
                  font-size: 24px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  color: #fff;
                }
              }
              .arrow {
                width: 180px;
                background: url(../../assets/images/index/arrow.png);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 100% auto;
                display: flex;
                justify-content: center;
                align-content: flex-start;
                .shifts {
                  font-size: 26px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  color: #fff;
                }
              }
              .endPlace {
                display: flex;
                justify-content: center;
                align-content: center;
                flex-direction: column;
                .city {
                  font-size: 36px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: #fff;
                }
                .site {
                  font-size: 24px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  color: #fff;
                }
              }
            }
            .hotelPlaceBox {
              width: 100%;
              padding: 28px 70px;
              display: flex;
              justify-content: flex-start;
              align-content: center;
              .hotelPlace {
                display: flex;
                justify-content: flex-start;
                align-content: center;
                flex-direction: column;
                .city {
                  font-size: 36px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: #fff;
                }
                .site {
                  font-size: 24px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  color: #fff;
                }
              }
            }
          }
          .item-air {
            background: linear-gradient(
              90deg,
              rgba(147, 196, 255, 1) 0%,
              rgba(104, 182, 255, 1) 100%
            );
          }
          .item-train {
            background: linear-gradient(
              90deg,
              rgba(255, 202, 90, 1) 0%,
              rgba(255, 155, 66, 1) 100%
            );
          }
          .item-hotel {
            background: linear-gradient(
              90deg,
              rgba(249, 158, 159, 1) 0%,
              rgba(255, 113, 113, 1) 100%
            );
          }
          .item-car {
            background: linear-gradient(
              90deg,
              rgba(98, 220, 196, 1) 0%,
              rgba(124, 195, 123, 1) 100%
            );
          }
        }
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
      .ico.iconshouye2 {
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