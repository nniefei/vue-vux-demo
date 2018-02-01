/**
 * Created by nnie on 2018/1/23.
 **/
import request from '../util/request'

const login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export {
  login
}
