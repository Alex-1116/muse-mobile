<template>
  <div class="indexContainer">
    <header class="header-box">
      <div class="headerTitle">e万源</div>
    </header>
    <div class="content">
      <Carousel></Carousel>
      <div class="dateByLimitNum">
        <div>2019年7月16日 周二</div>
        <div>今日限号：5和0</div>
        <div>查看本周限号</div>
      </div>
      <div class="tabIcon">
        <div class="tabItem" v-for="(item,index) in tabs" :key="index" @click="gotoForm(item)">
          <div class="tab-item-bg">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="tab-item-text">{{item.txt}}</div>
        </div>
      </div>
      <div class="community">
        <div class="community-title">
          <i class="iconfont iconfangzi"></i>&nbsp;社区动态
        </div>
        <div class="community-content">
          <div class="comItem" v-for="(comItem,index) in communitys" :key="index">
            <div class="comItem-left">
              <img :src="comItem.imgUrl" />
            </div>
            <div class="comItem-right">
              <div class="comItem-right-title">{{comItem.title}}</div>
              <div class="comItem-right-content">{{comItem.content}}</div>
              <div class="comItem-right-time">{{comItem.time}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "../components/Carousel";
export default {
  name: "index",
  components: {
    Carousel
  },
  data() {
    return {
      tabs: [
        {
          txt: "万源差旅",
          icon: "iconfeiji"
        },
        {
          txt: "疗休养",
          icon: "iconyezishu"
        },
        {
          txt: "通信网络",
          icon: "iconphone"
        },
        {
          txt: "社区物业",
          icon: "iconhulianwangon"
        },
        {
          txt: "万源云采",
          icon: "iconyunduanlianjie"
        },
        {
          txt: "幼儿教育",
          icon: "iconjiaoyu"
        },
        {
          txt: "万源e车",
          icon: "iconcheliang-"
        },
        {
          txt: "更多",
          icon: "iconai238"
        }
      ],
      communitys: [
        {
          imgUrl: require("../assets/images/carousel/carousel1.jpg"),
          title: "生活区宽带婧提速至百兆以上",
          content: "都快放假撒开飞机上考虑咖啡馆建设开发东方航空",
          time: "2019-07-17"
        },
        {
          imgUrl: require("../assets/images/carousel/carousel2.jpg"),
          title: "生活区宽带婧提速至百兆以上",
          content: "都快放假撒开飞机上考虑咖啡馆建设开发东方航空",
          time: "2019-07-17"
        },
        {
          imgUrl: require("../assets/images/carousel/carousel3.jpg"),
          title: "生活区宽带婧提速至百兆以上",
          content: "都快放假撒开飞机上考虑咖啡馆建设开发东方航空",
          time: "2019-07-17"
        }
      ]
    };
  },
  methods: {
    gotoForm(current) {
      if (current.txt == "万源差旅") {
        this.$router.push({ name: "wyIndex" });
      }
    }
  }
};
</script>
<style lang="less">
@import "../assets/iconfont/iconfont.css";
@import "../assets/common/common.css";
.indexContainer {
  width: 100%;
  background: #f8f8f8;
  .content {
    width: 100%;
    margin-top: 112px;
    margin-bottom: 100px;
    .dateByLimitNum {
      width: 100%;
      height: 70px;
      padding: 0 10px;
      background: #f2f2f2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tabIcon {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .tabItem {
        width: 25%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .tab-item-bg {
          width: 130px;
          height: 130px;
          border-radius: 20px;
          background: #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 80px;
          }
        }
      }
    }
    .community {
      width: 100%;
      margin-bottom: 120px;
      .community-title {
        width: 100%;
        height: 70px;
        padding: 0 10px;
        background: #f2f2f2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        i {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          font-size: 30px;
          background: #999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .community-content {
        width: 100%;
        .comItem {
          width: 100%;
          height: 190px;
          padding: 15px 10px;
          border-bottom: 1px solid #666;
          display: flex;
          justify-content: flex-start;
          .comItem-left {
            width: 200px;
            height: 160px;
            padding: 0 5px;
            img {
              width: 100%;
              height: 100%;
              display: flex;
            }
          }
          .comItem-right {
            width: calc(100% - 200px);
            height: 160px;
            padding: 0 5px;
            .comItem-right-title {
              width: 100%;
              height: 50px;
              font-size: 30px;
            }
            .comItem-right-content {
              width: 100%;
              height: 80px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
            .comItem-right-time {
              width: 100%;
              height: 30px;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
