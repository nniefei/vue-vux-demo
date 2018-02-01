/**
 * Created by nnie on 2018/1/26.
 **/
import request from '../util/request'

const photoList = (data) => {
  return request({
    url: '/listjson?' + 'tag1=壁纸&tag2=全部&ie=utf8',
    method: 'get',
    params: {
      pn: data.pn,
      rn: data.rn
    }
  })
}

export {
  photoList
}
