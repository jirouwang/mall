<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                    class="tab-controll" 
                    @tabClick="tabClick"
                    ref="tabControl1" v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl2"
                    />
      <!-- 物品iid有的是重复的,所以goodslist中v-for循环需要的:key的值有可能会重复,所以会报错 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils'

  

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
      // console.log(this.goods[this.currentType].list)
   
    },
    mounted() {

      const refresh = debounce(this.$refs.scroll.refresh)

      // 监听item中图片加载完成
      //事件总线$bus监听
      // 通过$refs操作子组件不能在created里面调用
      this.$bus.$on('itemImageLoad', () => {
        // console.log('123')
        refresh()
      })

      

    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        switch(index) {
          case 0: this.currentType = 'pop'; break;
          case 1: this.currentType = 'new'; break;
          case 2: this.currentType = 'sell'; break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTop() {
        // 面向组件开发牛逼
        this.$refs.scroll.scrollTo(0, 0, 1000)
      },

      contentScroll(position) {
        // 1.判断backtop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.决定tabcontrol是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },

      loadMore() {
        this.getHomeGoods(this.currentType)
      },

      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求相关方法 , 牛逼方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(res)
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    padding-bottom: 51px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  /* .tab-controll {
    /* position: sticky; */
    /* top: 44px;
    z-index: 9; */
  /* } */ 
  .content {
    /* height: 100%; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-controll {
    position: relative;
    z-index: 9;
  }

</style>