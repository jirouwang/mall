<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <cart-list/>

    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    props:{

    },
    data(){
      return {
      }
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }

      // vuex辅助函数 ...mapGetters 在vuex里直接导入
      ...mapGetters([
        'cartLength'
      ])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>