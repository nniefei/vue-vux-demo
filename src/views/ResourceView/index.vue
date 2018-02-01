<!-- Created by nnie on 2018/1/23. -->
<template>
  <div>
    <div v-transfer-dom>
      <actionsheet @on-click-menu="clickActionSheet" :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
    <Drawer
      style="position: fixed" width="200px;"
      :show-mode="showModeValue"
      :show.sync="drawerVisibility"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#ededed', width: '80%', overflow: 'auto'}">
      <div class="sidebar" slot="drawer">
        <Group title="个人中心">
          <Cell title="我的消息" :is-link="true"></Cell>
          <Cell title="VIP会员" :is-link="true"></Cell>
          <Cell title="商城" :is-link="true"></Cell>
        </Group>
        <Group>
          <Cell title="我的好友" :is-link="true"></Cell>
          <Cell title="附近的人" :is-link="true"></Cell>
        </Group>
        <Group>
          <Cell title="个性皮肤" value="官方红" :is-link="true"></Cell>
          <Cell title="听歌识曲" :is-link="true"></Cell>
          <Cell title="定时播放" :is-link="true"></Cell>
          <Cell title="扫一扫" :is-link="true"></Cell>
          <Cell title="音乐闹钟" :is-link="true"></Cell>
          <Cell title="驾驶模式" :is-link="true"></Cell>
          <Cell title="音乐云盘" :is-link="true"></Cell>
        </Group>
        <Group class="toolbar">
          <a @click="nightModel">夜间模式</a>
          <a @click="setting">设置</a>
          <a @click="logout">退出</a>
        </Group>
      </div>
      <ViewBox>
        <XHeader slot="header"
          :right-options="{showMore: true}"
          @on-click-more="showMenus = true">
          <span>{{ title }}</span>
          <x-icon slot="overwrite-left"
                  type="navicon" size="35"
                  @click="drawerVisibility = !drawerVisibility"
                  style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </XHeader>
        <div id="resource">
          <transition name="slide-left">
            <keep-alive>
              <router-view class="slide-progress"></router-view>
            </keep-alive>
          </transition>
        </div>
        <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
          <tabbar-item link="/resource/film">
            <i slot="icon" class="fa fa-film"></i>
            <i slot="icon-active" class="fa fa-film fa-lg"></i>
            <span slot="label">电影</span>
          </tabbar-item>
          <tabbar-item link="/resource/music">
            <i slot="icon" class="fa fa-music"></i>
            <i slot="icon-active" class="fa fa-music fa-lg"></i>
            <span slot="label">音乐</span>
          </tabbar-item>
          <tabbar-item link="/resource/book">
            <i slot="icon" class="fa fa-book"></i>
            <i slot="icon-active" class="fa fa-book fa-lg"></i>
            <span slot="label">书籍</span>
          </tabbar-item>
          <tabbar-item link="/resource/photo" selected>
            <i slot="icon" class="fa fa-photo"></i>
            <i slot="icon-active" class="fa fa-photo fa-lg"></i>
            <span slot="label">图片</span>
          </tabbar-item>
        </tabbar>
      </ViewBox>
    </Drawer>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, XHeader, XButton, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Drawer, ViewBox, GridItem, Grid } from 'vux'
  export default {
    name: 'resource',
    directives: {
      TransferDom
    },
    components: { Tabbar, TabbarItem, Group, Cell, XHeader, XButton, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Drawer, ViewBox, GridItem, Grid },
    data () {
      return {
        menus: {
          menu1: '分享资源',
          menu2: '搜索资源'
        },
        showMenus: false,
        drawerVisibility: false,
        showModeValue: 'overlay',
        showPlacementValue: 'left',
        title: '我的资源'
      }
    },
    computed: {
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    methods: {
      clickActionSheet (key) {
        if (key === 'menu2') {
          this.$router.push('/resource/search')
        }
      },
      nightModel () {
      },
      setting () {
      },
      logout () {
        localStorage.ifLogined = false
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .sidebar{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: auto;
    padding-bottom: 0.35rem;
  }
  .sidebar>div:nth-child(3){
    padding-bottom: 1rem;
  }
  .sidebar .weui-cells__title{
    font-size: 18px;
  }
  .sidebar .vux-label{
    font-size: 14px;
  }
  .sidebar .toolbar{
    position: fixed;
    height: 30px;
    padding: 9px 3px 3px;
    background: white;
    width: 100%;
    bottom: 0;
  }
  .sidebar .toolbar .weui-cells{
    padding: 0;
  }
  .sidebar .toolbar a{
    font-size: 14px;
  }
  .sidebar .toolbar a:nth-child(1){
    position: fixed;
    height: 30px;
    width: auto;
    bottom: 0;
    left: 5%;
  }
  .sidebar .toolbar a:nth-child(2){
    position: fixed;
    height: 30px;
    width: auto;
    bottom: 0;
    left: 50%;
  }
  .sidebar .toolbar a:nth-child(3){
    position: fixed;
    height: 30px;
    width: auto;
    bottom: 0;
    right: 5%;
  }
  .slide-progress{
    position: absolute;
    width: 100%;
    left: 0;
  }
  .slide-left-enter-active {
    transition: all .8s ease;
  }
  .slide-left-leave-active {
    transition: all .3s;
  }
  .slide-left-enter {
    transform: translate(100%, 0);
    opacity: 0;
  }
  .slide-left-leave-to {
    transform: translate(-100%, 0);
    opacity: 0;
  }
  #resource{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
