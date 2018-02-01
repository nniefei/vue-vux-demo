<!-- Created by nnie on 2018/1/24. -->
<template>
  <div class="photo">
    <img v-for="(item, index) in photoList" :src="item.src" @click="show(index)" class="previewer-demo-img">
    <div v-transfer-dom>
      <Previewer :list="photoList" ref="previewer" :options="options"></Previewer>
    </div>
  </div>
</template>d

<script>
  import { Previewer, Tab, TabItem, TransferDom } from 'vux'
  export default {
    name: 'photo',
    directives: { TransferDom },
    components: { Previewer, Tab, TabItem },
    data () {
      return {
        page: {
          pn: 0,
          rn: 100
        },
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }
      }
    },
    computed: {
      photoList () {
        let list = []
        if (this.$store.getters.photoList.length !== 0) {
          this.page.rn += 30
          this.$store.getters.photoList.map((local, index) => {
            list[index] = {
              src: local.image_url,
              h: local.image_height,
              w: local.image_height
            }
          })
        }
        return list
      }
    },
    mounted () {
      this.$store.dispatch('GET_PHOTOLIST', this.page).then(res => {
      })
    },
    methods: {
      show (index) {
        this.$refs.previewer.show(index)
      },
      loadMore () {
        setTimeout(() => {
          this.actionValue.pullupStatus = 'default'
        }, 100)
        this.$store.dispatch('GET_PHOTOLIST', this.page).then(res => {})
      }
    }
  }
</script>

<style>
  ::-webkit-scrollbar {display:none}
  .photo{position: absolute;width: 100%;height: 100%;overflow: auto;padding-bottom: 1.5rem;}
  .photo img{width: 33.33%;height: 100px;float: left}
  .photo>img:nth-last-child(1){display: none}
</style>
