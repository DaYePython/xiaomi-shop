/**
 *  封装 axios的配置和请求响应
 *
 */

import axios from 'axios'

const service = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/285246',
})

service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use((response) => {
  const { data } = response
  console.log(data)
  return data
})

export default service
