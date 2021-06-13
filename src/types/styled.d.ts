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
    }
  }
}