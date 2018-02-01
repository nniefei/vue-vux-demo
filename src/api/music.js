/**
 * Created by nnie on 2018/1/25.
 **/
import request from '../util/request'

const music = () => {
  return request({
    url: '/musicTypeList',
    method: 'get'
  })
}

const getMusicListByType = (id) => {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: {
      id: id
    }
  })
}

export {
  music,
  getMusicListByType
}
