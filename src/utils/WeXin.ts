import { injectable } from "inversify"
import { PAGEPATH } from './../config'
import { app } from './container'


@injectable()
export default class implements WeXin {
  async config(options: Wechat.ConfigData) {
    return new Promise((resolve, reject) => {

      // console.log("具体的config",options)


      wx.config({
        ...options,
        debug: false,//还是别打开的好 不然会频繁在微信开发者工具弹出alert框，实际使用console也足够了 犯不着
        success: (res) => {
          console.log("wxconfig success", res)
          resolve()
        },
        fail: (res) => {
          console.log("wxconfig fail", res)
          reject(new Error('微信SDK配置失败'))
        }
      })
    })
  }

  async ready() {
    return new Promise((resolve, reject) => {
      wx.ready(() => {
        console.log("'微信SDK环境 准备好了'")
        resolve()
      })
      reject(new Error('微信SDK环境未配置好'))
    })
  }

  async checkJsApi(param: Wechat.CheckJsApiData) {
    return new Promise((resolve, reject) => {
      wx.checkJsApi({
        ...param,
        success: () => resolve(),
        fail: (res) => {
          console.log("出错checkJsApi", res)
          app.navigateTo(PAGEPATH.forbidden)
        }

      })
    })
  }

  async chooseImage(param: Wechat.ChooseImageData): Promise<Wechat.LocalResource> {
    return new Promise((resolve, reject) => {
      wx.chooseImage({
        ...param,
        success: (res) => resolve(res),
        fail: () => reject(new Error('图片选取失败')),
        cancel: () => reject(new Error('已取消选择'))
      })
    })
  }

  async previewImage(param: Wechat.PreviewImageData) {
    return new Promise((resolve, reject) => {
      wx.previewImage({
        ...param,
        success: (res) => resolve(res),
        fail: () => reject(new Error('无法预览图片'))
      })
    })
  }
  async uploadImage(param: Wechat.UploadResource): Promise<Wechat.ServerResource> {
    return new Promise((resolve, reject) => {
      wx.uploadImage({
        ...param,
        success: (res) => resolve(res),
        fail: () => reject(new Error('图片上传失败'))
      })
    })
  }

  async getLocalImgData(options: { localId: string }): Promise<{ localData: string }> {
    return new Promise((resolve, reject) => {
      wx.getLocalImgData({
        ...options,
        success: (res) => resolve(res),
        fail: () => reject(new Error('无法获取本地图片信息'))
      })
    })
  }

  async getLocation(param: Wechat.GetLocationParam): Promise<Wechat.LocationResource> {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        ...param,
        success: resolve,
        fail: () => reject(new Error('获取地理位置信息失败'))
      })
    })
  }

  async openLocation(param: Wechat.LocationData) {
    return new Promise((resolve, reject) => {
      wx.openLocation({
        ...param,
        success: resolve,
        fail: () => reject(new Error('查看地图失败'))
      })
    })
  }
}