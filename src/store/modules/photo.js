/**
 * Created by nnie on 2018/1/26.
 **/
import * as photoAPI from '../../api/photo'

const photo = {
  state: {
    photoList: []
  },

  mutations: {
    SET_PHOTOLIST: (state, list) => {
      state.photoList = list
    }
  },

  actions: {
    GET_PHOTOLIST: (context, data) => {
      return new Promise((resolve, reject) => {
        photoAPI.photoList(data).then(res => {
          context.commit('SET_PHOTOLIST', res.data.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default photo
