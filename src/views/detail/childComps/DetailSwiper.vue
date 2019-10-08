<template>
  <!-- <div class="detail-swiper"> -->
  <swiper class="swiper-item detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.iid">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  <!-- </div> -->
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: '',
    props: {
      topImages: {
        type: Array,
        // default() {
        //   return []
        // }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    created() {
      // console.log(this.topImages.length,'---')
    }
  }
</script>

<style scoped>
  .swiper-item {
    height: 350px;
    overflow: hidden;
  }
</style>