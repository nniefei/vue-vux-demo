/**
 * Created by nnie on 2018/1/23.
 **/
import Mock from 'mockjs'

const successDate = Mock.mock({
  'code': '000000',
  'msg': '身份校验通过，允许登录',
  'data': {
    flag: true
  }
})

const errorDate = Mock.mock({
  'code': '000001',
  'msg': '身份校验异常，禁止登录',
  'data': {
    flag: false
  }
})

export {
  successDate,
  errorDate
}
