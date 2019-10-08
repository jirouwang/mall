<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
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
      paramInfo: {
        type: Object
      }
    },
    components:{},
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    border-top: 5px solid #eee;
    width: 100%;
  }
  .info-size {
    width: 100%;
    height: 200px;
    border-collapse: collapse;
  }
  .info-size td {
    border-bottom: 1px solid #ecc;
  }
  .info-param {
    width: 100%;
    height: 500px;
    font-size: 14px;
    margin: 5px 0;
  }
  .info-param-key {
    padding-right: 50px;
  }
  .param-value {
    color: var(--color-high-text);
  }
</style>