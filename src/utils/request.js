import httpRequest from './request-global'
import store from '../store'
import { filterEmptyField, filterStringLeadingAndTrailingSpaces } from './index'

export default async function request(data, isFilter = false) {
  // 过滤 data 和 params 中的 null、''、undefined
  if (isFilter) {
    if (data.data) data.data = filterEmptyField(data.data)
    if (data.params) data.params = filterEmptyField(data.params)
  }
  // 过滤请求参数中，string 类型的前后空格
  if (data.data) data.data = filterStringLeadingAndTrailingSpaces(data.data)
  if (data.params) data.params = filterStringLeadingAndTrailingSpaces(data.params)

  let result = await httpRequest(data)
  if (!data.includeHeader) {
    result = result.data
  }
  return result
}
