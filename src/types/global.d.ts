/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.ttf' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface CustomResponse<T> {
  timestamp: number // 时间戳(毫秒数)
  data?: T // 正确返回的结果
  status: number // 业务状态码，一般为HttpStatus的statusCode * 10, 业务错误则为2048
  error?: string // 错误标题
  message?: string // 错误描述
  path?: string // 报错的接口地址
  debugMessage?: string // debugMessage
}

interface Exception {
  status: number // 100一下为前端业务逻辑执行产生的异常，其他为后端status异常
  message: string
  [propsName]?: string // 其他字段
}

interface RequestOptions<T> {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: T
}

type OptionId = string | number

interface Option {
  id: string
  name: string
  children?: Option[]
}

interface WeXin {
  async config(options: ConfigData)
  async ready()
  async checkJsApi(param: CheckJsApiData)
  async chooseImage(param: ChooseImageData): Promise<LocalResource>
  async previewImage(param: PreviewImageData)
  async uploadImage(param: UploadResource): Promise<ServerResource>
  async getLocalImgData(options: { localId: string }): Promise<{ localData: string }>
  async getLocation(param: GetLocationParam): Promise<LocationResource>
  async openLocation(param: LocationData)
}

declare var antTheme: Partial<DefaultTheme>