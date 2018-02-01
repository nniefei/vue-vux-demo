/**
 * Created by nnie on 2018/1/25.
 **/
import * as musicAPI from '../../api/music'

const music = {
  state: {
    musicTypeList: [],
    musicList: []
  },

  mutations: {
    SET_MUSICTYPE_LIST: (state, list) => {
      state.musicTypeList = list
    },
    SET_MUSIC_LIST: (state, list) => {
      state.musicList = list
    }
  },

  actions: {
    GET_MUSICTYPE_LIST: (context) => {
      return new Promise((resolve, reject) => {
        musicAPI.music().then(res => {
          if (res.data.code === '000000') {
            context.commit('SET_MUSICTYPE_LIST', res.data.data.musicTypeList)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GET_MUSIC_LIST: (context, id) => {
      return new Promise((resolve, reject) => {
        musicAPI.getMusicListByType(id).then(res => {
          context.commit('SET_MUSIC_LIST', res.data.result)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default music
