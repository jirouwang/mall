<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div> 
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
      }
    },
    components:{},
    methods: {
      addToCart() {
        // console.log('123')
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #f50;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* z-index: 100; */
    display: flex;
    justify-content: space-between;
  }
  .bar-right .buy {
    background-color: #f69;
    flex: 1;
    text-align: center;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
    text-align: center;
    flex: 2;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  .bar-left {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
  }
</style>