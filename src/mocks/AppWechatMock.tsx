import App from "../domain/App"

export default class extends App {
  // private __token: string = ''

  // get logined(): boolean {
  //   return !!this.__token
  // }

  // get inWechat(): boolean {
  //   return true
  // }

  // redirect(path: string) {
  //   console.log('微信授权path: ', path)
  //   window.location.replace('/?code=code12345678')
  // }

  // async login(phone?: string, code?: string) {
  //   console.log('login 参数: ', phone, code)

  //   // 新注册用户
  //   this.__token = 'token12345'
  //   let err = new Error("用户注册")
  //   err.name = '201'
  //   throw err

  //   // 老用户
  //   this.__token = 'token12345'
  // }
}