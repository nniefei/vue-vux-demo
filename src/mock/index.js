/**
 * Created by nnie on 2018/1/23.
 **/
import Mock from 'mockjs'
import * as loginMock from './login'
import * as musicMock from './music'

const loginSys = Mock.mock('/login', 'post', function (options) {
  const data = JSON.parse(options.body)
  if (data.account === 'admin' && data.password === '12345') {
    return loginMock.successDate
  } else {
    return loginMock.errorDate
  }
})

const musicTypeList = Mock.mock('/musicTypeList', 'get', function (options) {
  return musicMock.musicTypeList
})

export {
  loginSys,
  musicTypeList
}
