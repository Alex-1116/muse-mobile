<template>
  <div>
    <router-view></router-view>
    <div class="tabberWarp">
      <div class="warp">
        <NavItem
          :txt="item.txt"
          :page="item.page"
          @change="getVal"
          v-for="(item,index) in tabbarDes"
          :key="index"
          :sel="selected"
        >
          <i class="iconfont" :class="item.normalImg" slot="normalImg"></i>
          <i class="iconfont" :class="item.activeImg" slot="activeImg"></i>
        </NavItem>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import NavItem from "./NavItem.vue";
import "../assets/iconfont/iconfont.css";
export default {
  name: "tabbar",
  components: {
    NavItem
  },
  data: function() {
    return {
      selected: "index",
      tabbarDes: [
        {
          txt: "首页",
          page: "index",
          normalImg: "iconshouye",
          activeImg: "iconshouye1"
        },
        {
          txt: "服务",
          page: "serve",
          normalImg: "iconfuwu",
          activeImg: "iconfuwuerji2"
        },
        {
          txt: "我的",
          page: "my",
          normalImg: "iconwode",
          activeImg: "iconwode1"
        }
      ]
    };
  },
  methods: {
    getVal: function(res) {
      this.selected = res;
    }
  }
};
</script>
<style type="text/css">
.warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.warp i {
  width: 30px;
  height: 30px;
  font-size: 40px;
}
.tabberWarp i {
  margin-top: 10px;
  margin-bottom: 5px;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
}
</style>
