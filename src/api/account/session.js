import request from '@/utils/request'
import MD5 from 'crypto-js/md5'

const prefix = '/pub/sessions'
export function login(identity, password) {
  return request(
    {
      url: '/pub/sessions',
      method: 'post',
      params: { identity: identity, password: MD5(password) }
    },
    true
  )
}

export function logout() {
  return request(
    {
      url: '/pub/sessions/drop',
      method: 'post'
    },
    true
  )
}
