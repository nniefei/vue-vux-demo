/**
 * Created by nnie on 2018/1/25.
 **/
import * as bookAPI from '../../api/book'

const book = {
  state: {
    bookList: []
  },

  mutations: {
    SET_BOOKLIST: (state, list) => {
      state.bookList = list
    }
  },

  actions: {
    GET_BOOKLIST: (context) => {
      return new Promise((resolve, reject) => {
        bookAPI.getBookList().then(res => {
          context.commit('SET_BOOKLIST', res.data.collections)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default book
