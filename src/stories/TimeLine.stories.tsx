import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Book from '../components/Page'
import TimeLine from '../components/TimeLine'
import Card from '../components/Card'


const stories = storiesOf('TimeLine', module)

stories.add('base timeline', () => (
  <Book>
    <Card>
      <TimeLine data={[
        { timeDesc: '步骤一', desc: '验证身份', icon: 'trank' },
        { timeDesc: '步骤二', desc: '阅读并签署《知情同意书》', icon: 'box' },
        { desc: '激活成功', icon: 'edit' },
      ]} span='11rem' fadeHistory mark='icon' />
    </Card>
  </Book>
))

const Title = styled.div`
  font-size: ${props => props.theme.size.text + 0.2}rem;
  margin-bottom: 2rem;
`

stories.add('multiline of desc timeline', () => (
  <Book>
    <Card>
      <Title>
        激活流程
      </Title>
      <TimeLine data={[
        { timeDesc: '步骤一', desc: '验证身份：362427199008203117' },
        { timeDesc: '步骤二', desc: '阅读并签署《知情同意书》，统一后便可激活用户，体验线上购药下单' },
        { desc: '激活成功' },
      ]} span='11rem' />
    </Card>
  </Book>
))

stories.add('show timestamps', () => (
  <Book>
    <Card>
      <Title>
        激活流程
      </Title>
      <TimeLine data={[
        { timeDesc: '步骤一', desc: '验证身份：362427199008203117', timestamp: Date.now() },
        { timeDesc: '步骤二', desc: '阅读并签署《知情同意书》，统一后便可激活用户，体验线上购药下单', timestamp: Date.now() },
        { desc: '激活成功' },
      ]} span='11rem' fadeLeft alignItem='start' />
    </Card>
  </Book>
))
