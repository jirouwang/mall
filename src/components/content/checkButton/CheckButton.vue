<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/common/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
      }
    },
    props: {
      isChecked: {
        type: Boolean,
        default:true
      }
    },
    components:{},
  }
</script>

<style scoped>
  .check-button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #eee
  }
  .check-button img {
    width: 20px;
    height: 20px;
  }
  .check {
    background-color: #f50;
    border-color: #f50;
  }
</style>