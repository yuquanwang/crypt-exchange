import App from "../domain/App"

import { validateVerifyCode, validateMobile } from "../utils/validators"
import sysConfigData from "./json/sysConfig.json"

export default class extends App {
  get logged() {
    return true
  }

  // get now() {
  //   return Date.now()
  // }

  // get inWechat() {
  //   return true
  // }


  // async fetchConfig(): Promise<AppConfig> {
  //   return {
  //     agreementUrl: 'https://baidu.com',
  //     informedConsentUrl: 'https://baidu.com',
  //     serviceInfoUrl: 'https://baidu.com',
  //     diseaseOptions: [
  //       { id: 1, name: '丙肝' },
  //       { id: 2, name: '肺癌' },
  //       { id: 3, name: '宫颈癌' },
  //       { id: 4, name: '乳腺癌' },
  //       { id: 5, name: '胃癌' },
  //       { id: 6, name: '脑癌' },
  //       { id: 7, name: '肝癌' },
  //     ],
  //     diseaseOptionsWithSys: [],
  //     featureOptions: [
  //       { id: 1, name: '方便买药' },
  //       { id: 2, name: '资讯用药' },
  //       { id: 3, name: '用药提醒' },
  //       { id: 4, name: '慈善活动信息' },
  //       { id: 5, name: '用药提醒' },
  //       { id: 6, name: '药品信息' },
  //       { id: 7, name: '咨询药品报销' },
  //       { id: 8, name: '咨询用药' },
  //     ],
  //     relativeOptions: [
  //       { id: 0, name: '本人' },
  //       { id: 1, name: '父母' },
  //       { id: 2, name: '爱人' },
  //       { id: 3, name: '子女' },
  //       { id: 4, name: '其他' }
  //     ],
  //     districtOptions: [
  //       {
  //         id: 510, name: '四川省', children: [
  //           { id: 510000, name: '成都市' },
  //           { id: 510001, name: '绵阳市' },
  //           { id: 510002, name: '德阳市' },
  //           { id: 510003, name: '崇州市' },
  //         ]
  //       },
  //       {
  //         id: 100, name: '上海市', children: [
  //           { id: 100001, name: '黄浦区' },
  //           { id: 100002, name: '徐汇区' },
  //           { id: 100003, name: '长宁区' },
  //           { id: 100004, name: '静安区' },
  //         ]
  //       },
  //     ],
  //     deliveryOptions: [],
  //     medicareOptions: [],
  //     drugFeedOptions: [],
  //     addressTagOptions: [],
  //   }
  // }

  // async fetchConfig(): Promise<AppConfig> {
  //   // @ts-ignore
  //   this.config =  sysConfigData
  //   this.config.districtOptions = districtData
  //   return this.config
  // }


  // async sendVerifyCode(phone: string) {
  //   const res = '1111'
  //   this.showToast(res || '验证码已发送')
  // }

  // // 使用code或手机号登录，获取并设置token
  // async login(phone?: string, code?: string) {
  //   if (phone) {
  //     // 验证phone和code有效性，数据必填判断在不在这里，在页面完成
  //     let err = new Error("新用户注册成功")
  //     err.name = '201'
  //     throw err
  //   } else {
  //     // 微信code登录
  //     let err = new Error("该用户未绑定手机")
  //     err.name = '303'
  //     throw err
  //   }
  // }
}