<!-- Created by nnie on 2018/1/24. -->
<template>
  <div id="intheaters">
    <Scroller lock-x scrollbar-y use-pullup height="-90"
              :pullup-config="pullupConfig"
              @on-pullup-loading="loadMore"
              v-model="actionValue">
      <div>
        <Panel :list="intheatersList" type="1"></Panel>
      </div>
    </Scroller>
  </div>
</template>

<script>
  import { Scroller, Panel } from 'vux'
  export default {
    props: [],
    name: 'intheaters',
    components: { Scroller, Panel },
    data () {
      return {
        pullupConfig: {
          content: '上拉加载更多',
          downContent: '松开进行加载',
          upContent: '上拉加载更多',
          loadingContent: '加载中...'
        },
        actionValue: {
          pullupStatus: ''
        },
        filmParam: {
          top250: {
            start: 0,
            count: 20
          }
        }
      }
    },
    mounted () {
      this.$store.dispatch('GET_IN_THEATERS').then(res => {
        console.log(res)
      })
    },
    computed: {
      intheatersList () {
        let data = []
        if (this.$store.getters.inTheatersList.data !== undefined) {
          this.$store.getters.inTheatersList.data.subjects.map(item => {
            let model = {src: '', title: '', desc: '', url: '', data: {}}
            model.src = item.images.large
            model.title = item.title
            model.desc = `${item.genres.join(' ')}(${item.year})(平均分：${item.rating.average})`
            model.url = item.alt
            model.data = item
            data.push(model)
          })
        }
        return data
      }
    },
    methods: {
      loadMore () {
        setTimeout(() => {
          this.actionValue.pullupStatus = 'default'
        }, 100)
        this.$store.dispatch('GET_IN_THEATERS').then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style>
  #intheaters .xs-plugin-pullup-container{
    font-size: 14px!important;
  }
  #intheaters .weui-panel__bd{
    /*padding-bottom: 3rem;*/
  }
</style>
