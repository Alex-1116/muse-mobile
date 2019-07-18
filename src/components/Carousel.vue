<template>
  <div class="carouselContainer">
    <mu-carousel hide-controls>
      <mu-carousel-item v-for="(imgItem,index) in carouselImgInfo" :key="index">
        <img :src="imgItem.imgUrl" />
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      carouselImgInfo: [
        { imgUrl: require("../assets/images/carousel/carousel1.jpg") },
        { imgUrl: require("../assets/images/carousel/carousel2.jpg") },
        { imgUrl: require("../assets/images/carousel/carousel3.jpg") }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less">
.mu-carousel {
    height: 320px !important;
    width: 100%;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>

