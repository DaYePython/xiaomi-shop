/**
 *  封装 axios的配置和请求响应
 *
 */

import axios from "axios";

const service = axios.create({

})

service.interceptors.request.use(
    (config) => {
        return config
    })
service.interceptors.request.use(
    (response) => {
        return response
    }
)

export default service