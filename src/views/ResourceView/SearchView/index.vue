<!-- Created by nnie on 2018/1/26. -->
<template>
  <div id='search'>
    <div class='search-input'>
      <input v-model='keyword' @input="inputChange" @focus="onfocus" :style='inputStyle' placeholder="百度一下"/>
      <span @click='cancel' v-if='ifShowList'>取消</span>
    </div>
    <div class='search-list'>
      <ul v-if="searchData.length>0" style='padding-bottom: 3.5rem'>
        <li v-for='item in searchData' @click='chooseItem(item)'>
          <p>{{item.q}}</p>
        </li>
      </ul>
      <div v-else style="text-align: center;font-family: 'Microsoft YaHei UI';font-size: 14px"><p>暂无信息（百度搜索）</p><p>（http://suggestion.baidu.com/?json=1&wd=关键字）</p></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [],
    name: 'search',
    data () {
      return {
        keyword: '',
        ifShowList: false,
        inputStyle: {width: '93%'},
        searchList: []
      }
    },
    computed: {
      searchData () {
        let data = this.searchList
        if (this.$store.getters.searchList.length !== 0) {
          console.log('%c%s', 'color: blue', new Date().getTime() + '  搜索结果列表第一个为：' + this.$store.getters.searchList[0].q)
          data = this.$store.getters.searchList
        } else {
          console.log('%c%s', 'color: blue', new Date().getTime() + '  ' + '搜索结果列表为空')
        }
        return data
      }
    },
    methods: {
      chooseItem (data) {
        this.keyword = data.q
        this.$store.commit('SET_SEARCHLIST', [])
      },
      inputChange () {
        if (this.keyword === '') {
          console.log('%c%s', 'color: red', new Date().getTime() + '  ' + '搜索关键字为空')
          this.$store.commit('SET_SEARCHLIST', [])
        } else {
          console.log('%c%s', 'color: red', new Date().getTime() + '  搜索关键字为：' + this.keyword)
          this.$store.dispatch('GET_SEARCHLIST', {keyword: this.keyword}).then((res) => {})
        }
      },
      onfocus () {
        if (this.keyword !== '') {
          this.$store.dispatch('GET_SEARCHLIST', {keyword: this.keyword}).then((res) => {})
        }
      },
      cancel () {
        this.ifShowList = !this.ifShowList
        if (this.ifShowList) {
          this.inputStyle.width = '80%'
        } else {
          this.inputStyle.width = '93%'
        }
        this.$store.commit('SET_SEARCHLIST', [])
      }
    }
  }
</script>
<style>
  #search{
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .search-input{
    position: relative;
    height: 30px;
    padding: 10px 10px 15px 10px;
    background: #ededed;
  }
  .search-input input{
    float: left;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  .search-input span{
    color: red;
    float: left;
    font-size: 16px;
    height: 35px;
    line-height: 35px;
    padding-left: 12px;
    font-family: 'Microsoft YaHei UI';
  }
  .search-list{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  .search-list ul li{
    padding: 10px 10px 0 30px;
    font-size: 14px;
    font-family: 'Microsoft YaHei UI';
  }
  .search-list ul li p{
    padding-bottom: 10px;
    border-bottom: 1px solid #ededed;
  }
</style>

