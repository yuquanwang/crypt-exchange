import styled from 'styled-components'
import { cover, transparentize } from 'polished'

const Mask = styled.div<MaskProps>`
  ${props => !props.minmal && cover()}
  ${props => !props.minmal && 'position: fixed;'}
  background: ${({ theme }) => transparentize(1 - theme.opacity, '#000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.size.pageMargin};
  z-index: 999;
`

interface MaskProps {
  minmal?: boolean
}

export default Mask
