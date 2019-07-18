<template>
  <div class="home">
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
      <mu-appbar class="header_title" color="teal">
        <mu-button icon slot="left">
          <i class="iconfont icongengduo"></i>
        </mu-button>LoadMore
        <mu-button icon slot="right" @click="refresh()">
          <i class="iconfont iconshuaxin"></i>
        </mu-button>
      </mu-appbar>
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <template v-for="(i,index) in num">
              <mu-list-item :key="index" style="border-bottom: 1px solid #ccc;">
                <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
              </mu-list-item>
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num: 20,
      refreshing: false,
      loading: false,
      text: "List"
    };
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === "List" ? "Menu" : "List";
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    }
  }
};
</script>
<style lang="less">
.home{
  width: 100%;
  padding-top: 112px;
}
.demo-loadmore-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
    i{
      font-size: 40px;
    }
  }
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>