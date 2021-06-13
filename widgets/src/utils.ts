import {
  CSSObject, InterpolationFunction, ThemedStyledProps, DefaultTheme,
  GlobalStyleComponent, Interpolation, createGlobalStyle, css,
} from "styled-components"
import { normalize, linearGradient, transparentize, lighten } from "polished"

// Turn off the native look and feel for input types
export const hideUserAgentApperance = `
  -webkit-appearance: none;
  appearance: none;
  background: none;
`

export function createDefaultStyle<P extends object = {}>(
  style:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
): GlobalStyleComponent<P, DefaultTheme> {

  return createGlobalStyle`
  ${normalize()}

  html {
    /* 适配手机，对于手机设备，按屏幕比例设置字体对应的基准 */
    overflow-x: hidden;

    /* 对于宽于ipad的设备，认为是桌面设备 */
    @media (min-width: 768px) {
    }
  }

  body {
    background: ${props => props.theme.colors.background};
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
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  label {
    display: block;
    margin: 0.5em 0;
  }

  input {
    background: ${props => props.theme.colors.background};
    box-sizing: border-box;
    font-size: 1rem;
    color: ${lighten(0.4, '#000')};
    padding: 1em;
    border: none;
    border-radius: 2em;
    outline: none;
    vertical-align: middle;
    ::placeholder {
      vertical-align: middle;
    }
    :invalid{
      box-shadow: ${props => props.theme.colors.red} 0px 0px 1.5px 1px;
    }
  }

  button, input[type='button'] {
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
    height: 2.7em;
    border-radius: 1.35em;
    padding: 0 1em;
    border: 1px solid ${props => props.theme.colors.primary};
    :hover {
      opacity: ${props => props.theme.opacity};
      border: 1px solid currentColor;
    }
    :active {
      background: ${props => props.theme.colors.primaryDark};
    }
    :disabled {
      color: currentColor;
      opacity: ${props => props.theme.opacity};
      background: ${props => props.theme.colors.gray};
      border: 1px solid ${props => props.theme.colors.gray};
      cursor: not-allowed;
    }
  }

  input[type=radio],[type=checkbox] {
    ${hideUserAgentApperance}
  }

  input[type='radio'],[type='checkbox'] {
    width: 1em;
    height: 1em;
    border: 1px solid ${props => props.theme.colors.gray};
    background: transparent;   
    :checked {
      background: ${props => props.theme.colors.primary};
    }
    :indeterminate {
      /* TODO */
    }
  }

  input[type='radio'] {
    border-radius: 1em;
  }

  input[type='color'] {
    width: 2em;
    height: 2em;
    padding: 0.5em;
    border-radius: 0.325em;
  }

  a {
    color: ${props => props.theme.colors.primary};
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
    stroke-linecap: round;
    stroke-linejoin: round;
    height: 1em;
    vertical-align: middle;
  }

  .datetime-reset-button {
    fill: currentColor;
    opacity: .5;
    background-color: transparent;
    border: none;
    align-self: center;
    flex: none;
    padding-left: 2px;
    padding-right: 2px;
  }

  ${css(style, ...interpolations)}
`
}