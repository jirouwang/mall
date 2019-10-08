<template>
  <div class="comment">
    <h2>评论信息</h2>
    时间: {{commentInfo.created | showDate}}
  </div>
</template>

<script>
  import {formatDate} from "common/utils"
  export default {
    name: '',
    data(){
      return {
      }
    },
    props: {
      commentInfo: {
        type: Object
      }
    },
    components:{},
    filters: {
      showDate(value) {
        // 1.将时间戳转成Date对象
        const date = new Date(value* 1000)

        // 2.将date进行格式化
        return formatDate(date, 'yyyy/MM/dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .comment {
    margin: 20px 0;
    height: 500px;
  }
</style>