<!-- Created by nnie on 2018/1/24. -->
<template>
  <div id="booklist">
    <div style="width: 100%;height: auto">
      <Swiper v-model="imgListIndex"
              :list="imgList"
              @on-index-change="changeImg"></Swiper>
    </div>
    <div style="position: fixed;width: 100%;height: auto">
      <Scroller lock-x scrollbar-y use-pullup height="-90"
                :pullup-config="pullupConfig"
                @on-pullup-loading="loadMore"
                v-model="actionValue">
        <div>
          <Panel :list="bookListForSlideshow" type="1"></Panel>
        </div>
      </Scroller>
    </div>
  </div>
</template>

<script>
  import { Swiper, Scroller, Panel } from 'vux'
  export default {
    props: [],
    name: 'book',
    components: { Swiper, Scroller, Panel },
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
        imgListIndex: 0
      }
    },
    computed: {
      imgList () {
        let list = []
        if (this.$store.getters.bookList !== undefined) {
          this.$store.getters.bookList.map(item => {
            let model = {src: '', title: '', desc: '', url: '', data: {}}
            // model.url = item.book.alt
            model.img = item.book.images.large
            model.title = item.book.title
            list.push(model)
          })
        }
        return list
      },
      bookListForSlideshow () {
        let data = []
        if (this.$store.getters.bookList !== undefined) {
          this.$store.getters.bookList.map(item => {
            let model = {src: '', title: '', desc: '', url: '', data: {}}
            model.src = item.book.images.large
            model.title = item.book.title
            model.desc = `作者：${item.book.author} 印刷：${item.book.publisher} 价格：${item.book.price} ${item.book.summary}`
            // model.url = item.book.alt
            model.data = item
            data.push(model)
          })
        }
        return data
      }
    },
    mounted () {
      this.$store.dispatch('GET_BOOKLIST').then(res => {
      })
    },
    methods: {
      changeImg (index) {
        this.imgListIndex = index
      },
      loadMore () {
        setTimeout(() => {
          this.actionValue.pullupStatus = 'default'
        }, 100)
        this.$store.dispatch('GET_BOOKLIST').then(res => {
        })
      }
    }
  }
</script>

<style>
  #booklist{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #booklist .weui-panel__bd{
    padding-bottom: 3.5rem;
  }
  #booklist .xs-plugin-pullup-container{
    font-size: 14px!important;
    position: fixed;
    top: 1100px;
  }
  #booklist .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  #booklist .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  #booklist .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  #booklist .black {
    background-color: #000;
  }
  #booklist .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  #booklist .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  #booklist .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  #booklist .fadeInUp {
    animation-name: fadeInUp;
  }
  #booklist .swiper-demo-img img {
    width: 100%;
  }
</style>
