/**
 * Created by nnie on 2018/1/23.
 **/
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import common from './modules/common'
import login from './modules/login'
import film from './modules/film'
import music from './modules/music'
import book from './modules/book'
import photo from './modules/photo'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    login,
    film,
    music,
    book,
    photo,
    search
  },
  getters
})

export default store
