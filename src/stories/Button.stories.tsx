import React from 'react'
import { storiesOf } from '@storybook/react'
import { linearGradient, transparentize } from 'polished'
import Book from '../components/Page'
import Button from '../components/Button'
import { theme } from '../config'

const stories = storiesOf('Button', module)

stories.add('normal button with linear gradient background color', () => (
  <Book>
    <Button>立即续方</Button>
  </Book>
))

stories.add('primary button', () => (
  <Book>
    <Button layout='primary'>主操作按钮</Button>
  </Book>
))

stories.add('disabled primary button', () => (
  <Book>
    <Button layout='primary' disabled>主操作按钮</Button>
  </Book>
))

stories.add('ghost button', () => (
  <Book>
    <Button layout='ghost'>验证码</Button>
  </Book>
))

stories.add('change background', () => {
  const background = linearGradient({
    colorStops: [transparentize(0.4, theme.colors.red), theme.colors.red],
    toDirection: 'to right'
  })
  return (
    <Book>
      <Button background={background}>更换背景</Button>
    </Book>
  )
})

stories.add('rect round corner button', () => (
    <Book>
        <Button layout='rectCorner'>肺炎</Button>
        <Button layout='rectCorner'>肺炎</Button>
        <Button layout='rectCorner'>肺炎</Button>
    </Book>
))
