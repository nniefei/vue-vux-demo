/**
 * Created by nnie on 2018/1/23.
 **/
import * as loginAPI from '../../api/login'

const login = {
  state: {
    ifLogined: false
  },

  mutations: {
    SET_LOGIN_FLAG: (state, flag) => {
      localStorage.ifLogined = flag
      state.ifLogined = flag
    }
  },

  actions: {
    LOGIN: (context, data) => {
      return new Promise((resolve, reject) => {
        loginAPI.login(data).then(res => {
          if (res.data.code === '000000') {
            context.commit('SET_LOGIN_FLAG', true)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CHANGE_FLAG: (context, data) => {
      context.commit('SET_LOGIN_FLAG', data)
    }
  }
}

export default login
