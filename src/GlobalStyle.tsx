import { lighten, linearGradient, normalize, transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import fontSrc from './assets/font_bebas.ttf'
import { theme } from './config'

export const shadow = `1px 1px 2px ${theme.colors.primary}, 1px 1px 2px ${theme.colors.primary}`

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    line-height: 1.5 !important;
    @media (max-width: 680px) {
      font-size: ${1000 / 375}vw;
    }
  }

  body {
    background: ${props => props.theme.colors.background} !important;
    font-size: ${props => props.theme.size.text}rem !important;
    color: ${lighten(0.2, '#000')};
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  div, section {
    box-sizing: border-box;
  }

  h1 {
    font-size: ${props => props.theme.size.text + 0.4}rem !important;
  }

  h2 {
    font-size: ${props => props.theme.size.text + 0.2}rem;
  }

  input {
    box-sizing: border-box;
    color: ${lighten(0.4, '#000')};
    padding: 0 1em;
    outline: none;
    border: none;
    &::placeholder {
      font-size: ${props => props.theme.size.text}rem;
      padding: 0.2em 0;
    }
  }

  button {
    ${props => linearGradient({
  colorStops: [
    transparentize(1 - props.theme.opacity, props.theme.colors.primary),
    props.theme.colors.primary]
})}
    color: white;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    height: 2.7rem;
    font-size: ${props => props.theme.size.text - 0.4}rem;
    border-radius: 1.35rem;
    padding: 0 1em;
    &:active {
      opacity: ${props => props.theme.opacity};
    }
    &:disabled {
      opacity: ${props => props.theme.opacity};
    }
  }

  a {
    color: ${props => props.theme.colors.blue};
    cursor: pointer;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ul {
    padding-inline-start: 0;
    list-style: none;
    li {
      box-sizing: border-box;
      border-bottom: 1px solid ${props => props.theme.colors.background};
    }
  }

  svg {
    vertical-align: middle;
    width: 1em;
  }

  var {
    font-style: normal;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
    background: #fff;
  }
  
  button, input, optgroup, select, textarea {
      font-family: inherit !important;
  }
  
  .simple-modal {
      font-size: 1.8rem;
      button {
        font-size: 1.8rem;
      }
  }
`

export default GlobalStyle