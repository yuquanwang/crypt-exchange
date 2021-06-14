import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  opacity: 0.6,
  colors: {
    primary: '#29c588',
    primaryDark: '#0FB48B',
    blue: '#6492FF',
    yellow: '#FFB931',
    red: '#FF5F5F',
    background: '#F5F5F5',
    gray: '#EEEEEE'
  }
}

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
    }
  }
}

export const ANIME = {
  spring: {
    noWobble: 'spring(1, 170, 26, 0)', // { stiffness: 170, damping: 26 }
    gentle: 'spring(1, 120, 14, 0)', // { stiffness: 120, damping: 14 },
    wobbly: 'spring(1, 180, 12, 0)', // { stiffness: 180, damping: 12 },
    stiff: 'spring(1, 210, 20, 0)', // { stiffness: 210, damping: 20 }
  }
}