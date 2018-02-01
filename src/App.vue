<template>
  <div id="app">
    <router-view></router-view>
    <CustomLoading v-if="ifShowLoading" :msg="message"></CustomLoading>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      ifShowLoading () {
        return this.$store.state.common.ifShowLoading
      }
    },
    data () {
      return {
        message: '拼命加载中...'
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
