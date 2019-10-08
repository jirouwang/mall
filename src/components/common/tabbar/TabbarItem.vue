<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 如果字变红的active类写在slot上的话slot被解析成div时class会变没有,
    所以可以在外面套一个div然后把class给他 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
    <!-- <img src="../../assets/img/tabbar/主页1.svg" alt="">
    主页 -->
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        // isActive: false
      }
    },
    computed:{
      isActive() {
        //获得当前活跃路由的path,与全部路由的path,如果匹配,则返回true
        
        // if(this.path == this.$route.path)
        // console.log(this.path);
        // console.log(this.$route.path)
        // console.log(this.$route.path.indexOf(this.path) !== -1)

        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        //$route是哪个路由活跃就代表哪个路由
        //$router代表router文件夹里index.js里的router实例
        if(this.$route.path !== this.path)
          this.$router.replace(this.path)
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /* tabbar 一般高度都为49px */
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin: 3px;
    vertical-align: middle;
  }
</style>