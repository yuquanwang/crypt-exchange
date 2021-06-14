import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { cover } from 'polished'
import { text, number } from '@storybook/addon-knobs'
import Book from '../components/Page'
import Input, { TextArea } from '../components/Input'
import Button from '../components/Button'

const stories = storiesOf('Input', module)

const WhiteBook = styled(Book)`
  background: #fff;
  &>div {
    margin: 1rem 1.5rem;
  }
`

const StyledBackground = styled.div`
  ${cover()}
  background: #fff;
`

stories.add('input placeholder', () => (
  <Book>
    <StyledBackground><Input placeholder={text('placeholder', '请输入手机号')} /></StyledBackground>
  </Book>
))

stories.add('regex allowed for letter', () => (
  <Book>
    <StyledBackground>
      <Input placeholder={text('re1', '允许输入数字')} re={/\d|\./} />
      <Input placeholder={text('re2', '允许输入整数')} re={/\d/} />
    </StyledBackground>
  </Book>
))

stories.add('max length', () => (
  <Book>
    <StyledBackground>
      <Input placeholder='请在右侧设置最大长度' maxLength={number('max length', 6)} />
    </StyledBackground>
  </Book>
))

stories.add('call keyboard out', () => (
  <Book>
    <StyledBackground>
      {
        // @ts-ignore
        <Input placeholder='调出键盘' inputMode={text('input mode', '')} />
      }
    </StyledBackground>
  </Book>
))

stories.add('normal text area', () => (
  <Book>
    <StyledBackground>
      <TextArea placeholder="发表评论..."></TextArea>
    </StyledBackground>
  </Book>
))

const StyledButton = styled(Button)`
  background: white;
  color: gray;
  font-size: ${props => props.theme.size.text - 0.1}rem;
  padding: 0;
  margin-left: 1.5rem;
`

stories.add('input for search', () => (
  <WhiteBook>
    <Input
      placeholder={text('placeholder', '请输入手机号')}
      prefix='circle'
      clearable
      action={<StyledButton>取消</StyledButton>} />
  </WhiteBook>
))
