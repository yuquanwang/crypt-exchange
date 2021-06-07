import request from '@/utils/request'

export function placeOrder(data) {
  return request(
    {
      url: '/private/trade/place-order',
      method: 'post',
      data: data
    },
    true
  )
}
