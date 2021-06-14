import { throttle, debounce } from 'lodash'
import moment from "moment"

const Second = 1000
const Minute = 60 * Second
const Hour = 60 * Minute
const Day = 24 * Hour
export const Weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

export { throttle, debounce }

export function getDuration(milliseconds: number): AppDuration {
  const d = Math.floor(milliseconds / Day)
  if (d > 0) return { value: d, unit: '天' }
  const h = Math.floor(milliseconds / Hour)
  if (h > 0) return { value: h, unit: '小时' }
  const m = Math.floor(milliseconds / Minute)
  if (m > 0) return { value: m, unit: '分钟' }
  const s = Math.floor(milliseconds / Second)
  if (s > 0) return { value: s, unit: '秒' }
  return { value: milliseconds, unit: '毫秒' }
}

export function toCurrency(amount: number, currency: string = 'CNY'): String {
  // return amount.toLocaleString('zh-CN', { style: 'currency', currency: currency })
  return '¥ ' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export function getQueryObject(url = window.location.href) {
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj: { [key: string]: any } = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

// 所需记录的位置，获取该条数据所在的分页页码
export function pageNumber(length: number, pageSize: number): number {
  const page = Math.floor(length / pageSize)
  return length % pageSize ? page + 1 : page
}

export const formatUnixTime = (timeStamp?:number):string => {
  if (timeStamp) {
    let d = moment(timeStamp).format('YYYY.MM.DD')
    return d
  }
  return ""
}
//获得html的本地文件路径
export const getLocalFileObjectURL = (file: File) :string => {
  let url = null
  // @ts-ignore
  if (window.createObjectURL!=undefined) { // basic
    // @ts-ignore
    url = window.createObjectURL(file)
  } else if (window.URL!=undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL!=undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}


export const setTitle = (t:string) => {
    document.title = t
    var i = document.createElement('iframe')
    i.src = '//m.baidu.com/favicon.ico'
    i.style.display = 'none'
    i.onload = function() {
      setTimeout(function(){
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
}

// https://juejin.im/post/5d59fe36f265da039519f2bb 微信图片直接上传阿里云oss
// 符合微信的base64转blob
export const dataURLtoBlob = (dataURI:string) => {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0] // mime类型
  var byteString = atob(dataURI.split(',')[1]) // base64 解码
  var arrayBuffer = new ArrayBuffer(byteString.length) // 创建缓冲数组
  var intArray = new Uint8Array(arrayBuffer) // 创建视图

  for (var i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i)
  }
  return new Blob([intArray], { type: mimeString })
}

export const isWechatDevTools = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (/wechatdevtools/.test(ua)) {
    return true
  }
  return false
}

export const isIOS = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) {
    // console.log('苹果终端设备')
    return true
  }
  return false
}
export const isIOSV2 = () => {
  let ua = navigator.userAgent.toLowerCase()
  let ios = false
  if (ua.match(/iphone/i)) {
    ios = true
  }else{
    ios = false
  }
  return ios
}

export const isAndroid = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (/(android)/i.test(ua)) {
    // console.log('安卓终端设备')
    return true
  }
  return false
}
export const isPC = () => {
  if( !isIOS() && !isAndroid() ){
    return true
  }
  return false
}

export const getSignLink = (url:string) => {
  let signLink = ''
  if (isIOS()) {
    // signLink = decodeURIComponent(wxm.signurl())
    signLink = encodeURIComponent(url)
  } else if (isAndroid()) {
    signLink = window.location.href
  } else {
    signLink = window.location.href
  }
  console.log(' 原来url 和 sign url ', url,signLink)
  return signLink
}

export const maskIdCard = (idCard: string) => idCard.replace(/^(.{6})(?:\d+)(.{4})$/,  "\$1********\$2")
export const maskPhone = (phoneNum: string) => phoneNum.replace(/^(.{3})(?:\d+)(.{4})$/,  "\$1*****\$2")
export const maskMedicalCard = (medicalCard: string) => {
  if(medicalCard && medicalCard.length > 3) {
    return medicalCard.replace(/^(?:\w+)(.{3})$/,  `${new Array(medicalCard.length - 3).fill('*').join('')}\$1`)
  }
  return medicalCard
}

//locationstorage是否支持
export const  isLocalStorageSupported = () => {
  let testKey = 'test',storage = window.sessionStorage
  try {
    storage.setItem(testKey, 'testValue')
    storage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
}