<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        counter: 0,
        imageLength: 0
      }
    },
    props: {
      detailInfo: {
        type: Object
      }
    },
    methods: {
      imgLoad() {
        if(++this.counter === this.imageLength) {
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imageLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 15px 0;
    width: 100%;
  }
  .info-desc {
    margin: 12px 5px;
    font-size: 14px;
    padding: 8px 0;
    border-top: 1px solid #f50;
    border-bottom: 1px solid #f50;
  }
  .info-key {
    margin: 10px 5px;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>