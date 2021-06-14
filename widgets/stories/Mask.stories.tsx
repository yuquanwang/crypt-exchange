import { number } from '@storybook/addon-knobs'
import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Mask } from '../src'
import Book from '../src/Page'

const Opacity = styled(Mask) <MaskStyleProps>`
  background: ${props => transparentize(1 - props.opacity, '#000')};
`

export const OpacityCheck = () => (
  <Book>测试透明度
    <Opacity opacity={number('opacity', 0.6, {
      range: true,
      min: 0,
      max: 1,
      step: 0.1
    }, 'opacity')} />
  </Book>
)

export default { title: 'Mask' }

interface MaskStyleProps {
  opacity: number
}