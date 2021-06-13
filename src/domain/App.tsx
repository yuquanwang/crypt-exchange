import { Modal } from '@medtree/widgets'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { injectable } from 'inversify'
import { observable } from 'mobx'
import { utc } from 'moment'
// @ts-ignore
import qs from 'qs'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import ModalNotice from "../components/ModalNotice"
import Toast from '../components/Toast'
import { APIPATH, COPYWORK, HTTPCONFIG, PAGEPATH, theme } from '../config'
import { getQueryObject } from "../utils"
import { app, wechat } from '../utils/container'
import { randomStr } from "../utils/string"
import { validateMobile, validateVerifyCode } from '../utils/validators'
@injectable()
export default class implements App {
  authority?: string

  invalidToken: string = ''

  //用来绑定微信公众号的id
  public openId?: string = ''

  @observable
  config: AppConfig = {
    agreementUrl: '',
    informedConsentUrl: '',
    entrustedConsentUrl: '',
    serviceInfoUrl: '',
    diseaseOptions: [],
    diseaseCategoryOptions: [],
    diseaseOptionsWithSys: [],
    featureOptions: [],
    relativeOptions: [],
    districtOptions: [],
    deliveryOptions: [],
    medicareOptions: [],
    drugFeedOptions: [],
    addressTagOptions: [],
    dateOptions: []
  }

  loading: boolean = false

  get logged(): boolean {
    return !!this.token
  }

  private offset: number = 0

  get now() {
    return Date.now() + this.offset
  }

  get isDev() {
    return process.env.NODE_ENV === "development" ? true : false
  }
  get isQa() {
    return window.location.href.indexOf("https://test-wecare.medtreehealth.com") >= 0
  }
  get isProduction() {
    return window.location.href.indexOf("https://wecare.medtreehealth.com") >= 0
  }
  get isDebug() {
    return getQueryObject().debug === 'Y'
    // return window.location.href.indexOf("debug") > 0
  }
  // private _token?: string = process.env.NODE_ENV === 'production' ? '' : 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODU4MTkzNjAsInN1YiI6IjEifQ.TdzDjIcANt8lz-D_rU-kPhwHoz0vkGML9_oQKNb0WcE'
  private _token?: string = ''

  public get token() {
    return this._token || localStorage.getItem('token') || ''
  }

  public set token(token: string) {
    this._token = token || ''
    localStorage.setItem('token', token || '')
  }

  private _http: AxiosInstance

  get inWechat(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase()
    let res = false
    if (/micromessenger/g.test(userAgent) || /_sq_/g.test(userAgent)) {
      res = true
    }
    // console.dir(`在微信环境吗 ${res}  userAgent  ${userAgent} `)
    return res
  }

  private get wechatCode(): string | null {
    // 首先确定是否在微信环境下
    if (!this.inWechat) throw new Error(COPYWORK.err.envError)
    const params = new URL(window.location.href).searchParams
    return params.get('code')
  }

  constructor() {
    this._http = axios.create(HTTPCONFIG)

    this._http.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        // 登录和验证码接口直接发起请求
        if (/verifycode/.test(config.url!)) return config
        if (!this.logged && !/login/.test(config.url!)) await this.login()

        // header中注入token
        console.log("token 数据是", this.token)
        this.token && (config.headers['token'] = this.token)

        //追加随机参数
        config.params = { ...config.params, random: randomStr() }

        //全局loading 追加
        app.showLoading()

        return config
      },
      error => {
        Promise.reject(error)
      }
    )


    this._http.interceptors.response.use(
      (response: AxiosResponse<CustomResponse<any>>) => {
        // 获取后端系统时间，计算前端时间偏移量
        this.offset = utc(response.headers['date']).valueOf() - Date.now()

        //全局loading 隐藏 追加
        app.hideLoading()

        // 处理登录注册流程的页面跳转
        if (/\/login/.test((response.request as XMLHttpRequest).responseURL)) {
          if (response.status === 201) {
            this.token = response.data.data
            let err = new Error('成功注册新用户')
            err.name = response.status.toString()
            throw err
          }
        }
        return response.data.data
      },

      // 处理后端response和error
      async (error: AxiosError<CustomResponse<any>>) => {
        if (/network/g.test(error.message)) {
          error.message = COPYWORK.err.networkError
          throw error
        }

        if (/timeout/g.test(error.message)) {
          error.message = COPYWORK.err.timeout
          throw error
        }
        // debugger

        if (!error.response) {
          let state = null
          let title = "服务器端错误"
          window.history.pushState(state, title, PAGEPATH.serverError)
          return
        }
        this.offset = utc(error.response.headers['date']).valueOf() - Date.now()
        error.name = error.response.status.toString() || 'Error'

        app.hideLoading()
        this.loading = false

        switch (error.response.status) {
          case 303:
            {
              this.invalidToken = error.response.data.data
              throw error
            }
          case 400:
            error.message = COPYWORK.err.badRequest
            throw error
          case 401: {
            //401 跳转取消不然会出问题
            this.navigateTo(PAGEPATH.login)
            return
          }
          case 403: {
            this.token = ''
            if (this.inWechat) {
              // 尝试重新登录
              await this.login()
              return
            } else {
              return this.navigateTo(PAGEPATH.login)
            }
          }
          case 404: {
            error.message = COPYWORK.err.notFound
            throw error
          }
          case 500: {
            // debugger
            if (error.response) {
              const errorData = error.response.data
              const msg = errorData.message || COPYWORK.err.error500
              error.message = (errorData.status === 5555 || errorData.error === '5555') ? msg : COPYWORK.err.error500
              const toastMsg = `${errorData.error} ${errorData.message}`
              app.showToast(toastMsg)
              // app.removeToast()
              // app.showToast(error.message.toString())
            }
            throw error
          }
          default: {
            throw error
          }
        }
      },
    )
  }

  canRequest(url: string) {
    if (this.logged || /verifycode/.test(url!) || /login/.test(url!)) return true
    return false
  }

  request<E, T>(options: RequestOptions<E>): Promise<T> {
    return this._http.request<E, T>(options)
  }

  get<E, T>(url: string, data?: E): Promise<T> {
    return this._http.get<E, T>(url, {
      params: data,
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
  }

  post<E, T>(url: string, data: E): Promise<T> {
    return this._http.post<E, T>(url, data)
  }

  delete<E>(url: string, config?: E) {
    return this._http.delete<null, E>(url, config)
  }

  put<E>(url: string, data: E) {
    return this._http.put<null, E>(url, data)
  }

  navigateTo(path: string) {
    window.location.href = path
  }

  navigateBack() {
    window.history.back()
  }

  redirect(path: string) {

    window.location.replace(path)
  }

  showToast(message: string | undefined | string[], timeout?: number) {
    if (!timeout) timeout = 2000
    this.removeToast()
    const ele = document.createElement('div')
    ele.setAttribute('id', 'toast')
    const root = document.getElementById('root')

    root!.appendChild(ele)

    setTimeout(() => {
      this.removeToast()
    }, timeout)

    ReactDOM.render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Toast>{message}</Toast>
      </ThemeProvider>,
      ele)
  }
  removeToast() {
    const toast = document.getElementById('toast')
    toast && toast.remove()
  }

  showModals(params: ModalParams) {
    const { content, onConfirm, onCancel } = params
    const ele = document.createElement('div')
    ele.setAttribute('id', 'modal')

    const root = document.getElementById('root')
    root!.appendChild(ele)

    const handleConfirm = async () => {
      try {
        await onConfirm()
        root?.removeChild(ele)
      } catch (error) {
        this.showToast(error.message)
      }
    }

    const handleCancel = async () => {
      try {
        onCancel && await onCancel()
        root?.removeChild(ele)
      } catch (error) {
        this.showToast(error.message)
      }
    }

    const StyledModal = styled(Modal)`
      button {
        font-size: 1.6rem;
      }
    `

    ReactDOM.render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <StyledModal visible={true} onConfirm={handleConfirm} onCancel={handleCancel}>
          {content}
        </StyledModal>
      </ThemeProvider>,
      ele)
  }

  // 显示具有取消确定选项按钮的modal弹窗
  showModal(params: ModalParams) {

    const { content, onConfirm, onCancel } = params
    const ele = document.createElement('div')
    ele.setAttribute('id', 'modal')

    const root = document.getElementById('root')
    root!.appendChild(ele)

    const handleConfirm = async () => {
      try {
        await onConfirm()
        root?.removeChild(ele)
      } catch (error) {
        this.showToast(error.message)
      }
    }

    const handleCancel = async () => {
      try {
        onCancel && await onCancel()
        root?.removeChild(ele)
      } catch (error) {
        this.showToast(error.message)
      }
    }
    const StyledModal = styled(Modal)`
      padding: 2em 1em 5em 1em;
      button {
        font-size: 1.6rem;
      }
    `

    ReactDOM.render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <StyledModal visible={true} onConfirm={handleConfirm} onCancel={handleCancel} >
          {content}
        </StyledModal>
      </ThemeProvider>,
      ele)
  }

  showLoading(setLoading?: Function) {
    setLoading && setLoading(true)
    if (document.getElementById('loadingToast')) return
    const ele = document.createElement('div')
    ele.setAttribute('id', 'loadingToast')
    const root = document.getElementById('root')
    root!.appendChild(ele)

    this.loading = true
    ReactDOM.render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Toast type="loading"></Toast>
      </ThemeProvider>
      , ele)
  }

  hideLoading(setLoading?: Function) {
    setLoading && setLoading(false)
    const root = document.getElementById('root')
    const ele = document.getElementById('loadingToast')
    ele && root!.removeChild(ele)
    this.loading = false
  }

  showSuccess(props?: {
    title?: string
    title_sub?: string
    title_button?: string
    confirmFun?: Function
  }) {
    const domId = `modalSuccess`
    const root = document.getElementById('root')
    let domEl = document.getElementById(domId)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    domEl && root?.removeChild(domEl)
    domEl = document.createElement('div')
    domEl.setAttribute('id', domId)
    root!.appendChild(domEl)


    ReactDOM.render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <ModalNotice
          title={props?.title}
          title_sub={props?.title_sub}
          title_button={props?.title_button}
          onConfirm={props?.confirmFun}
        />
      </ThemeProvider>
      , domEl)
  }

  // 使用code或手机号登录，获取并设置token
  async login(phone?: string, code?: string) {
    if (this.loading) return
    this.loading = true

    try {
      if (phone) {
        // 验证phone和code有效性，数据必填判断在不在这里，在页面完成
        validateMobile(phone)
        validateVerifyCode(code!)
        let tokenParam = this.invalidToken || undefined
        if (app.inWechat) {
          tokenParam = undefined

          if (app.openId) {
            tokenParam = app.openId
          }
        }

        this.token = await this.post(`${APIPATH.login}?type=PHONE`, {
          phone, code: code!,
          token: tokenParam,
        })

        //使用过之后清空 以免出问问题
        if (tokenParam) {
          app.openId = ""
        }
      } else {

        // 微信code登录
        if (this.wechatCode) {

          console.log("微信登入当前的token为", this.token, this.wechatCode)
          this.token = await this.post(`${APIPATH.login}?type=WECHAT`, { code: this.wechatCode })
          console.log("微信登入后当前的token为", this.token, this.wechatCode)
          console.log("--==微信登入请求获取的token为 reload", this.token)
          window.location.reload()

        } else throw new Error('url中缺少code参数')
      }
    } catch (error) {
      throw error
    } finally {
      this.loading = false
    }
  }

  logout() {
    this.token = ''
  }

  async fetchAuthority() {
    this.authority = await this.get<undefined, string>(APIPATH.authority)
  }

  async fetchConfig(): Promise<AppConfig> {

    if (this.config.agreementUrl) return this.config
    this.config = await this.get<undefined, AppConfig>(APIPATH.config)
    localStorage.setItem("globalConfig", JSON.stringify(this.config))
    return this.config
  }

  async sendVerifyCode(phone: string) {
    await this.post<string, string>(APIPATH.verifyCode, phone)
    this.showToast('验证码已发送')
  }


  async configWechatSDk(url: string, jsApiList: string[]) {

    if (!this.inWechat) throw new Error('请在微信中打开页面')

    let signLink = ''
    const ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) {
      signLink = url
      console.log('苹果终端设备', '记录进入app时的url', signLink)
    } else if (/(android)/i.test(ua)) {
      signLink = window.location.href
      console.log('安卓终端设备', '记录进入app时的url', signLink)
    } else {
      signLink = window.location.href
      console.log('pc设备', '记录进入app时的url', signLink)
    }

    console.log(' 原来url 和 sign url ', url, signLink)

    const config = await this
      .get<{ url: string }, Wechat.ConfigData>(
        APIPATH.wechatSignature, { url })

    console.log("授权的js api list 为", jsApiList, config)
    // @ts-ignore
    config.timestamp = `${config.timestamp}`

    config.jsApiList = jsApiList

    try {
      await wechat.config(config)
      console.log("wx配置完毕")
      await wechat.ready()
      console.log("wx配置完毕 已经ready")
      await wechat.checkJsApi({
        jsApiList: jsApiList// 需要检测的JS接口列表，所有JS接口列表见附录2,
      })
      console.log("wx配置完毕 checkjs 完毕")

    } catch (e) {
      console.log("具体的config 出错", e)
    }



  }

  async reportLocation() {
    try {
      // 使用geo location API获取经纬度
      // @ts-ignore
      const { latitude, longitude } = await new Promise<Coordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords)
        }, (error) => {
          // 失败处理
          if (!app.inWechat) {
            console.log("在微信的环境里没有 开启地理位置 用另外的提示 不用这里的html5 的 地理位置提示 否则会报 user denied geolocation")
            reject(error)
          }
        })
      })

      // 提交经纬度信息
      await this.post(APIPATH.user.location, {
        latitude, longitude
      })
    } catch (error) {
      // debugger
      // this.showToast(error.message)
    }
  }
}


