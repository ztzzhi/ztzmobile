/*
 * axios全局配置
 */
import axios from "axios"
import { message } from "antd"
import store from "../store"
import qs from "qs"

const BaseURL = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  timeout: 4000,
  baseURL: BaseURL
})

//配置请求拦截器
instance.interceptors.request.use(
  config => {
    //从redux中获取之前保存的token
    const token = store.getState().login.token
    if (token) {
      //如果token存在，就设置到请求头中
      config.headers!.Authorization = `Bearer ${token}`
    }
    config.url = "/proxy" + config.url
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//配置响应拦截器
instance.interceptors.response.use(response => {
  if (response.data.code === 0) {
    return response.data
  } else if (response.data.code === 40003) {
    message.warning(`${response.data.message}，请重新登录`, 2)
    //分发删除用户信息的action
  } else {
    //提示消息
    message.error(`${response.data.message}`, 2)
    return
  }
})

export const getRequest = (url = "", data = {}, timeout = 5000) => {
  if (qs.stringify(data)) {
    url += url.includes("?")
      ? "&" + qs.stringify(data)
      : "?" + qs.stringify(data)
  }
  return instance.get(url, { timeout })
}

export const postRequest = (url = "", data = {}, timeout = 5000) => {
  return instance.post(url, data, { timeout })
}
