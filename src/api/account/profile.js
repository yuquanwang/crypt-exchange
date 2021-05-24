import request from '@/utils/request'
const prefix = '/private/profiles'
export function apiKeys(data) {
  return request(
    {
      url: prefix + '/keys/list',
      method: 'get',
      params: data
    },
    true
  )
}
export function postApiKey(data) {
  return request(
    {
      url: prefix + '/keys',
      method: 'post',
      data: data
    },
    true
  )
}

export function editApiKey(data) {
  return request(
    {
      url: prefix + '/keys/patch',
      method: 'put',
      data: data
    },
    true
  )
}
export function deleteApiKey(data) {
  return request(
    {
      url: prefix + '/keys/drop',
      method: 'delete',
      data: data
    },
    true
  )
}

export function updateProfile(data) {
  return request(
    {
      url: prefix + '/information',
      method: 'post',
      data: data
    },
    true
  )
}
