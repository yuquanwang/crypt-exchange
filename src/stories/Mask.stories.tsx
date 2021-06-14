import React from 'react'
import { storiesOf } from '@storybook/react'
import Mask from '../components/Mask'
import Book from '../components/Page'
import styled from 'styled-components'
import { number } from '@storybook/addon-knobs'
import { transparentize } from 'polished'

const stories = storiesOf('Mask', module)

const Opacity = styled(Mask) <MaskStyleProps>`
  background: ${props => transparentize(1 - props.opacity, '#000')};
`

stories.add('Mask of opacity', () => <Book>测试透明度<Opacity opacity={number('opacity', 0.6, {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
}, 'opacity')} /></Book>)

interface MaskStyleProps {
  opacity: number
}
