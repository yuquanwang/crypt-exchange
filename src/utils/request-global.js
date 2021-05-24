import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/api',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'indices', allowDots: true })
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (store.state.token) {
      config.headers['X-Token'] = localStorage.getItem('token')
    }
    if (store.state.csrfHeader) {
      config.headers['X-CSRF'] = localStorage.getItem('csrf-token')
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    // if the status is not 200, it is judged as an error.
    if (response.status !== 200 && response.status !== 201) {
      console.log(response.status)
      if (response.status === 403) {
        Message({
          message: 'Access denied',
          type: 'warning',
          duration: 5 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
      }
      if (response.status === 401) {
        Message({
          message: 'Login TimeOut',
          type: 'warning',
          duration: 5 * 1000
        })
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
        return Promise.reject(new Error(res.message || 'Error'))
      }
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  (error) => {
    console.log('err:' + error) // for debug
    if (error && error.response) {
      if (error.response.status === 403) {
        Message({
          message: 'Access denied',
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(error)
      }
      if (error.response.status === 401) {
        Message({
          message: 'Login TimeOut',
          type: 'warning',
          duration: 5 * 1000
        })
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
        return Promise.reject(error)
      }
      if (error.response.status === 400) {
        Message({
          message: error.response.data.msg || 'Need parameters that can be matched exactly',
          type: 'warning',
          duration: 5 * 1000
        })
        return Promise.reject(error)
      }
      const tip = error.response.data.errorData
      Message({
        message: tip,
        type: 'error',
        duration: 5 * 1000
      })
    }
    console.log('error.response is null')
    return Promise.reject(error)
  }
)

export default service