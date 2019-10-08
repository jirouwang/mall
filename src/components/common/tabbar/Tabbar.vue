<template>
  <div id="tab-bar">
    <slot></slot>
    <!-- <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/主页1.svg" alt="">
        首页
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/分类1.svg" alt="">
        分类
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/购物车1.svg" alt="">
        购物车
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/我的1.svg" alt="">
        我的
      </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
    components:{},
    props:{},
    data(){
      return {
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #e6e6e6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 1px rgba(100,100,100,.3);
  }
</style>