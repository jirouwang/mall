<template>
    <div v-show="isShow" class="toast">{{message}}</div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        message: '',
        isShow: false
      }
    },
    props: {
      // message: {
      //   type: String,
      //   default: ''
      // },
      // show: {
      //   type: Boolean,
      //   default: false
      // }
    },
    methods:{
      show(message, duration = 2000) {
        // console.log(123)
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration);
      }
    },
  }
</script>

<style scoped>
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 10px 10px;
    transform: translate(-50%, -50%);

    color: #fff;
    background-color: rgba(0,0,0,.7);
    border-radius: 10px;
    z-index: 999;
  }
</style>