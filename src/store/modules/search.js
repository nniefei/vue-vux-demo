/**
 * Created by nnie on 2018/1/31.
 */
import * as searchAPI from '../../api/search'

const search = {
  state: {
    searchList: []
  },
  mutations: {
    'SET_SEARCHLIST': (state, list) => {
      state.searchList = list
    }
  },
  actions: {
    'GET_SEARCHLIST': (context, data) => {
      return new Promise((resolve, reject) => {
        searchAPI.searchEngine(data).then(res => {
          let list = JSON.parse(res.data.substring(17, res.data.length - 2)).g === undefined ? [] : JSON.parse(res.data.substring(17, res.data.length - 2)).g
          context.commit('SET_SEARCHLIST', list)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default search
