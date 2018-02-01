<!-- Created by nnie on 2018/1/25. -->
<template>
  <div id="musiclist">
    <p class="musiclist-title">{{ musicList.name }}</p>
    <Scroller lock-x scrollbar-y use-pullup height="-90"
              :pullup-config="pullupConfig"
              @on-pullup-loading="loadMore"
              v-model="actionValue">
      <div>
        <Panel :list="musicList.list" type="1"></Panel>
      </div>
    </Scroller>
  </div>
</template>

<script>
  import { Scroller, Panel } from 'vux'
  export default {
    name: 'musiclist',
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
        }
      }
    },
    computed: {
      musicList () {
        let data = {name: '', list: []}
        if (this.$store.getters.musicList.length !== 0) {
          this.$store.getters.musicList.tracks.map(item => {
            let model = {src: '', title: '', desc: '', url: '', data: {}}
            model.src = item.album.picUrl
            model.title = item.name
            model.desc = `${item.album.name}--${item.artists[0].name}--${item.album.company}`
            model.url = item.alt
            model.data = item
            data.list.push(model)
          })
          data.name = this.$store.getters.musicList.name
        }
        return data
      }
    },
    mounted () {
      this.$store.dispatch('GET_MUSIC_LIST', this.$route.params.id).then(res => {
      })
    },
    methods: {
      loadMore () {
        setTimeout(() => {
          this.actionValue.pullupStatus = 'default'
        }, 100)
      }
    }
  }
</script>

<style>
  #musiclist .weui-panel__bd{
    padding-bottom: 1rem!important;
  }
  #musiclist .xs-plugin-pullup-container{
    position: relative!important;
    top: -30px!important;
    font-size: 14px!important;
    text-align: center!important;
  }
  #musiclist .musiclist-title{
    padding: 0.3rem;
    font-size: 30px;
    background: white;
    font-family: "Microsoft YaHei UI";
  }
</style>
