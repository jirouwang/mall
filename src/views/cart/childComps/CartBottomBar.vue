<template>
  <div class="bottom-bar">
    <div class="check-content" @click="checkClick">
      <check-button :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计: &yen;{{totalPrice}}
    </div>
    <div class="calculate" @click="clacSelectAll">
      去计算: {{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: '',
    data(){
      return {
      }
    },
    components:{
      CheckButton
    },
    computed: {
      totalPrice() {
        return this.$store.getters.cartList.filter(item => {
          return item.isChecked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.isChecked).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      },
      isSelectAll() {
        if (this.checkLength === 0) return false
        return !this.$store.state.cartList.some(item => !item.isChecked)
      },
      isSelectOne() {
        return !this.$store.state.cartList.every(item => !item.isChecked)
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.isChecked = false
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.isChecked = true
          })
        }
        //  一般情况这种代码可以想着简化如下,但是这里简化不了
        // this.$store.state.cartList.forEach(item => item.isChecked = !isSelectAll)
      },
      clacSelectAll() {
        if(!this.isSelectOne) {
          this.$toast.show('请选择商品!')
        }
        // this.$toast.show('请选择商品!')
        // console.log(this.isSelectOne)
      }
    }
  }
</script>
  
<style scoped>
  .bottom-bar {
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 52px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
  }
  .check-content {
    width: 90px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    justify-content: space-around;
    font-size: 15px;
    background-color: #f88;
  }
  .total-price {
    position: absolute;
    left: 100px;
    z-index: 9;
    bottom: 10px;
  }
  .calculate {
    position: absolute;
    color: #fff;
    right: 0;
    bottom: 0;
    z-index: 9;
    height: 40px;
    width: 90px;
    text-align: center;
    line-height: 40px;
    background-color: #f50;
  }
</style>