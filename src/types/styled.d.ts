// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    opacity: number
    colors: {
      primary: string
      primaryDark: string
      blue: string
      yellow: string
      red: string
      background: string
      gray: string
    },
    size: {
      remBase: string
      text: number
      borderRaduis: string // px
      pageMargin: string
    },
    "@border-color-base": string // base border outline a component
    "@border-radius-base": number,
    "@card-shadow": string
    "@descriptions-bg": string
    "@font-size-base": number
    "@font-size-sm": number
    "@margin-md": number // small containers and buttons
    "@margin-sm": number // Form controls and items
    "@margin-xs": number
    "@margin-xss": number // more small
    "@padding-lg": number
    "@padding-md": number
    "@primary-color": string
    "@typography-title-font-weight": number
    "@zindex-affix": number
  }
}
