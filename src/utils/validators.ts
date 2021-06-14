
import { COPYWORK } from '../config'

// @fixed: example 15900000000 blocked phone numbers with 17 head
// eslint-disable-next-line max-len
// export const phonePattern = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][3,5,6,9])|([7][0-9])|([8][0-9])|([9][0,1,8,9]))[0-9]{8}$/
export const phonePattern = /^[1](([1-9][0-9])|([1-9][1-9])|([5][0-3,5-9])|([6][3,5,6,9])|([7][0-9])|([8][0-9])|([9][0,1,8,9]))[0-9]{8}$/

export function validateMobile(phone: string) {
  let testResult = true
  if (!phonePattern.test(phone)) {
    testResult = false
    throw new Error(COPYWORK.err.mobileError)
  }
  return testResult
}

export function validateVerifyCode(code: string) {
  if (!/^\d{6}$/.test(code)) throw new Error(COPYWORK.err.verifyCodeError)
}

export function validateIDCard(code: string) {
  // 支持地址编码、出生日期、校验位验证
  if (!code
    || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
    throw new Error('身份证格式错误')
  }

  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  }

  // @ts-ignore
  if (!city[code.substr(0, 2)]) {
    throw new Error('身份证格式错误')
  }
  if (code.length === 18) {
    const codeList = code.split('')
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i += 1) {
      ai = Number(codeList[i])
      wi = factor[i]
      sum += ai * wi
    }

    // eslint-disable-next-line eqeqeq
    if (parity[sum % 11] != codeList[17].toUpperCase()) {
      throw new Error('身份证格式错误')
    }
  }
}