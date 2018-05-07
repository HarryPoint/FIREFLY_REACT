import qs from 'qs'
import axios from 'axios'
import { Message } from 'antd';
let service = axios.create({
  baseURL: '/api/',
  timeout: 30000
})
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data || {})
    if (!config.params) config.params = {}
    Object.assign(config.params, { csrf_token: window.csrf_token })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      let dt = error.response.data
      if (Object.prototype.toString.call(dt) === '[object Object]') {
        if (dt.field === '*') {
          // Message.error(`${error.response.status} ${dt.err_code}: ${dt.msg ? dt.msg : error.response.statusText}`)
          Message.error(`${dt.msg ? dt.msg : error.response.statusText}`)
        } else {
          Message.error(error.message)
        }
      } else {
        // Message.error(`${error.response.status}: ${error.response.statusText}`)
        Message.error(`${error.response.statusText}`)
      }
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
)
export default service
