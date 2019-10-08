<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
      }
    },
    components:{},
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
    text-align: center; 
    font-size: 13px;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 3px;
  }
</style>