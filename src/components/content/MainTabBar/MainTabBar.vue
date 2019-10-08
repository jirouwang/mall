<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/主页1.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/主页2.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/分类1.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/分类2.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/购物车1.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/购物车2.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/我的1.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/我的2.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import tabBar from 'components/common/tabbar/Tabbar.vue'
  import tabBarItem from 'components/common/tabbar/TabbarItem.vue'

  export default {
    name: 'MainTabBar',
    components:{
      tabBarItem,
      tabBar
    },
    data(){
      return {
      }
    },
  }
</script>

<style scoped>

</style>