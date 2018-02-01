<!-- Created by nnie on 2018/1/24. -->
<template>
  <div class="music">
    <div v-for="musicType in musicTypeList">
      <Flexbox>
        <FlexboxItem v-for="local in musicType" :key="local.id">
          <div style="text-align: center">
            <img v-if="local.bg !== ''" style="width: 100%;height: 100%" :src="local.bg" @click="chooseMusicList(local.id)">
          </div>
        </FlexboxItem>
      </Flexbox>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    prop: [],
    name: 'music',
    components: { Flexbox, FlexboxItem },
    data () {
      return {
      }
    },
    computed: {
      musicTypeList () {
        let list = []
        if (this.$store.getters.musicTypeList !== undefined) {
          const len = this.$store.getters.musicTypeList.length
          const s = Math.ceil(this.$store.getters.musicTypeList.length / 2)
          let n = 0
          for (let i = 1; i <= s; i++) {
            let start = (i - 1) * 2
            let end = start + 2
            list[n++] = this.$store.getters.musicTypeList.slice(start, end)
          }
          let m = len - s * 2
          if (m > 0) {
            list[n++] = this.$store.getters.musicTypeList.slice(s * 2)
          }
        }
        list.map((local, index) => {
          if (local.length < 2) {
            list[index].push({id: '', name: '', bg: ''})
          }
        })
        return list
      }
    },
    mounted () {
      this.$store.dispatch('GET_MUSICTYPE_LIST').then(res => {})
    },
    methods: {
      chooseMusicList (id) {
        this.$router.push({name: 'musiclist', params: {id}})
      }
    }
  }
</script>

<style>
  .music{
    padding-bottom: 2rem;
  }
  .music::-webkit-scrollbar {
    display: none;
  }
  .music .vux-flexbox-item{
    margin-left: 20px!important;
    width: 100%!important;
  }
</style>
