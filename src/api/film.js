/**
 * Created by nnie on 2018/1/24.
 **/
import request from '../util/request'

const top250 = (data) => {
  return request({
    url: '/movie/top250',
    method: 'get',
    params: {
      start: data.start,
      count: data.count
    }
  })
}

const inTheaters = () => {
  return request({
    url: '/movie/in_theaters',
    method: 'get'
  })
}

const comingsoon = (data) => {
  return request({
    url: '/movie/coming_soon',
    method: 'get',
    params: {
      start: data.start,
      count: data.count
    }
  })
}

export {
  top250,
  inTheaters,
  comingsoon
}
