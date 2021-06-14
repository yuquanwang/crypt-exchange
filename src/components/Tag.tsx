import styled, { css } from 'styled-components'
import { lighten, ellipsis } from 'polished'
import { HtmlHTMLAttributes } from 'react'

const Tag = styled.div<TagProps & { children: string }>`
  display: inline-block;
  width: 10.5rem;
  height: 3.3rem;
  line-height: calc(3.3rem - 4px);
  background: ${props => props.theme.colors.background};
  color: ${lighten(0.4, '#000')};
  border-radius: ${props => props.theme.size.borderRaduis};
  text-align: center;
  border: 2px solid ${props => props.theme.colors.background};
  cursor: pointer;

  ${props => props.active && css`
    background: transparent;
    color: ${props.theme.colors.primary};
    border: 2px solid ${props.theme.colors.primary};
  `}
  ${props => props.children.length > 6 && css`
    text-align: left;
    padding: 0 0.2em;
    ${ellipsis()}
  `}

  border:2px solid transparent;
  ${props => props.active && `border: 2px solid ${props.theme.colors.primary};`}
  :active {
    color: ${props => props.theme.colors.primary};
  }
`

interface TagProps extends HtmlHTMLAttributes<HTMLDivElement> {
  active?: boolean
  borderSize?: number
}

export default Tag