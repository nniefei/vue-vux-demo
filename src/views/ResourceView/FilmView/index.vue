<!-- Created by nnie on 2018/1/24. -->
<template>
  <div class="resource-film">
    <div class="title">
      <Tab :line-width="1">
        <TabItem @on-item-click="chooseType" selected >Top250</TabItem>
        <TabItem @on-item-click="chooseType">正在热映</TabItem>
        <TabItem @on-item-click="chooseType">即将上映</TabItem>
      </Tab>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  export default {
    props: [],
    name: 'film',
    components: { Tab, TabItem },
    data () {
      return {}
    },
    methods: {
      chooseType (index) {
        if (index === 0) {
          this.$router.push('top250')
        } else if (index === 1) {
          this.$router.push('intheaters')
        } else if (index === 2) {
          this.$router.push('comingsoon')
        }
      }
    }
  }
</script>

<style>
  .resource-film{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .resource-film .title{
    position: fixed;
    width: 100%;
    height: auto;
  }
  .resource-film .content{
    margin-top: 44px;
  }
</style>
