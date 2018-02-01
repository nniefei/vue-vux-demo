/**
 * Created by nnie on 2018/1/31.
 */
import request from '../util/request'

const searchEngine = (params) => {
  return request({
    url: '/search/engine?json=1',
    method: 'get',
    params: {
      wd: params.keyword
    }
  })
}

export {
  searchEngine
}
