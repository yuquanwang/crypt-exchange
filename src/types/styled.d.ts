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
    "@font-size-base": number
    "@typography-title-font-weight": number
    "@card-shadow": string
    "@padding-md": number
    "@zindex-affix": number
    "@descriptions-bg": string
    "@padding-lg": number
    "@primary-color": string
  }
}
