/**
 * Created by nnie on 2018/1/24.
 **/
import * as filmAPI from '../../api/film'

const film = {
  state: {
    top250List: {},
    inTheatersList: {},
    comingsoonList: {}
  },
  mutations: {
    SET_TOP_250: (state, data) => {
      state.top250List = data
    },
    SET_IN_THEATERS: (state, data) => {
      state.inTheatersList = data
    },
    SET_COMING_SOON: (state, data) => {
      state.comingsoonList = data
    }
  },
  actions: {
    GET_TOP_250: (context, data) => {
      return new Promise((resolve, reject) => {
        filmAPI.top250(data).then(res => {
          if (res.status === 200) {
            context.commit('SET_TOP_250', res)
            resolve('来自豆瓣的电影top250加载完成！')
          } else {
            alert(res.statusText)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    GET_IN_THEATERS: (context) => {
      return new Promise((resolve, reject) => {
        filmAPI.inTheaters().then(res => {
          if (res.status === 200) {
            context.commit('SET_IN_THEATERS', res)
            resolve('来自豆瓣的电影正在上映加载完成！')
          } else {
            alert(res.statusText)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    GET_COMING_SOON: (context, data) => {
      return new Promise((resolve, reject) => {
        filmAPI.comingsoon(data).then(res => {
          if (res.status === 200) {
            context.commit('SET_COMING_SOON', res)
            resolve('来自豆瓣的电影即将上映加载完成！')
          } else {
            alert(res.statusText)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default film
