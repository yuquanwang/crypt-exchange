import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import { cover } from 'polished'
import Book from '../components/Page'
import PullDown from '../components/PullDown'
import Input from '../components/Input'
import Mask from '../components/Mask'
import Tag from '../components/Tag'

const stories = storiesOf('PullDown', module)

const WhiteBook = styled(Book)`
  background: #fff;
`

const Trigger = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = styled.div`
  ${cover()}
  background: #fff;
  bottom: auto;
  padding: 1rem 1.5rem;
  z-index: 1000;
`

const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: start;
`

// @ts-ignore
const StyledTag = styled(Tag)`
  width: 9rem;
  margin-bottom: 1em;
`

stories.add('pull down layout', () => {
  const visible = boolean('visible', false)

  return (
    <WhiteBook>
      <Header>
        <Input placeholder='请输入搜索内容' />
        <Trigger><span>当前关注</span><span>筛选</span></Trigger>
        <PullDown visible={visible}>
          <Content>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
            <StyledTag>肝癌</StyledTag>
          </Content>
        </PullDown>
      </Header>
      {visible && <Mask />}
    </WhiteBook>
  )
})