<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>

    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <!-- 属性传值时,最好使用top-images的写法,不用topImage,因为html可能会不区分大小写 -->
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="commend"/>

      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
      </ul>
      
    </scroll>
    <!-- <back-top @click.native="backTop" v-show="isShowBackTop"/> -->
    <detail-bottom-bar @addCart="addCart"/>
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/detailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailbottomBar'

  import BackTop from 'components/content/backtop/BackTop'

  import Scroll from 'components/common/scroll/Scroll'
  // import Toast from  'components/common/toast/Toast'

  import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'

  import {mapActions} from 'vuex'

  export default {
    // name属性必须要有,不然keepalive的exclude属性排除不了
    name: 'Detail',
    data(){
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        themeTopYs: [],
        currentIndex: 0,
        // message: '',
        // show: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      // Toast
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.id

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //获取顶部轮播图数据
        const data = res.result
        // console.log(data)
        this.topImages = data.itemInfo.topImages
        // console.log(this.topImages)

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      
        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

        // this.$nextTick(() => {
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
        // })
      })    

    },
    methods: {
      ...mapActions(['addToCart']),
      imageLoad() {
        this.$refs.scroll.refresh()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
        // console.log(this.themeTopYs)
      },
      titleClick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 50, 1000)
      },
      contentScroll(position) {
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i=0; i < length; i++) {
          // if(positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[parseInt(i+1)]) {
          //   console.log(i)
          // }
          if(this.currentIndex!==i&&((i<length-1&&positionY >= this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[parseInt(i+1)]) || (i == length-1&&positionY>=this.themeTopYs[i]))){
            this.currentIndex = i
            // console.log(i)
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart() {
        // console.log(123)
        // 1.获取购物车要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车
        //   像这种添加成功后有返回信息的,需要在vuex里添加promise
        // 辅助函数...map可以跟他的所有属性(除了modules)
        // mapState和mapGetters返回的是属性,所以混入到computed中
        // mapActions和mapMutations返回的是方法,所以只能混入到methods中
        this.addToCart(product).then(res => {
          //添加成功弹窗
          // this.show = true
          // this.message = res
          
          // setTimeout(() => {
          //   this.show = false
          //   this.message = ''
          // }, 1500)

          this.$toast.show(res, 2000)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 93px);
  }
</style>