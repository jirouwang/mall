<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: '',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        // click: false限制不了button,但能限制div,可能是限制非button元素
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // this.scroll.scrollTo(0, y)

      //2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })

    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
        // console.log('123')
      }
    }
  }
</script>

<style scoped>

</style>