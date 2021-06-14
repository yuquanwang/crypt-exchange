import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { cover } from 'polished'
import { boolean } from '@storybook/addon-knobs'
import Tag from '../components/Tag'
import Book from '../components/Page'

const stories = storiesOf('Tag', module)

const StyledBackground = styled.div`
  ${cover()}
  background: #fff;
`

stories.add('normal tag', () => (
  <Book>
    <StyledBackground><Tag active={boolean('active', false)}>慈善活动信息</Tag></StyledBackground>
  </Book>
))