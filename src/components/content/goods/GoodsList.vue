<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :key="item.iid" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: '',
    props: {
      goods: {
        // 当传进来的数据为对象或者数组的时候,default为函数
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      GoodsListItem,
    },
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 1%;
  }

  
</style>