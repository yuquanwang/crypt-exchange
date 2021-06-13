import styled from 'styled-components'
import { Styles } from 'polished/lib/types/style'
import { HtmlHTMLAttributes } from 'react'

const Button = styled.button<ButtonProps>`
  ${({ theme, layout }) => layout === 'primary' && `
    height: 4.4rem;
    width: 100%;
    border-radius: 2.2rem;
    font-size: ${theme.size.text + 0.2}rem;
    background: ${theme.colors.primary};
  `}
  ${({ layout, theme }) => layout === 'ghost' && `
    height: 3.2rem;
    border-radius: 1.6rem;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.size.text - 0.2}rem;
    background: transparent;
  `}
  ${({ layout, theme }) => layout === 'rectCorner' && `
    height: 3.5rem;
    width: 30%;
    border-radius: 0.6rem;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.size.text - 0.1}rem;
    background: #F5F5F5;
  `}
  ${props => props.background}
`

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  layout?: 'primary' | 'ghost' | 'rectCorner'
  background?: Styles
}

export default Button