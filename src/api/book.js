/**
 * Created by nnie on 2018/1/25.
 **/
import request from '../util/request'

const getBookList = () => {
  return request({
    url: '/book/user/146566286/collections',
    method: 'get'
  })
}

export {
  getBookList
}
