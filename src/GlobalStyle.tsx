import { lighten, linearGradient, normalize, transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import fontSrc from './assets/font_bebas.ttf'
import { theme } from './config'

export const shadow = `1px 1px 2px ${theme.colors.primary}, 1px 1px 2px ${theme.colors.primary}`

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`

export default GlobalStyle