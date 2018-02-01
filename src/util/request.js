/**
 * Created by nnie on 2018/1/10.
 **/
import axios from 'axios'
import store from '../store'

const url = ''
const http = axios.create({
  baseURL: url,
  timeout: 5000
})

http.interceptors.request.use(config => {
  store.state.common.ifShowLoading = true
  return config
}, error => {
  store.state.common.ifShowLoading = false
  console.log('err' + error)
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  store.state.common.ifShowLoading = false
  return response
}, error => {
  store.state.common.ifShowLoading = false
  console.log('err' + error)
  alert(error.message)
  return Promise.reject(error)
})

export default http
export {
  url
}
