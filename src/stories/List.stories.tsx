import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { lighten } from 'polished'
import Book from '../components/Page'
import { Li } from '../components/List'
import logoSrc from '../assets/logo.svg'
import Tag from '../components/Tag'
import Button from '../components/Button'
import { theme } from '../config'

const stories = storiesOf('List', module)

const WhiteBook = styled(Book)`
  background: #fff;
  &>div {
    margin: 3.0rem 1.5rem;
  }
  overflow-x: hidden;
`

const Container = styled.div`
  display: inline-flex;
  width: 35rem;
  justify-content: space-between;
  margin-left: 2rem;
`

const Image = styled.img`
  width: 8rem;
  height: 8rem;
`

const Content = styled.div`
  display: inline-flex;
  width: 18.5rem;
  flex-wrap: wrap;
  font-size: ${props => props.theme.size.text - 0.2}rem;
  color: ${lighten(0.6, '#000')};
  align-content: space-between;
`

const Title = styled.div`
  font-size: ${props => props.theme.size.text + 0.2}rem;
  font-weight: bold;
  color: ${lighten(0.2, '#000')};
  line-height: 1.2;
  height: 4.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`


const StyledTag = styled(Tag as any)`
  display: inline-block;
  width: auto;
  height: auto;
  font-size: ${props => props.theme.size.text - 0.2}rem;
  border-radius: 4rem;
  padding: 0.2em 0.8em;
  line-height: 1.0;
  margin-right: 0.5em;
  color: #fff;
`
const StyledText = styled.span`
  line-height: 1.0;
`

stories.add('selectable', () => (
  <WhiteBook>
    <Li selectable >
      <Container>
        <Image src={logoSrc} />
        <Content>
          <Title>
            <StyledTag>英国进口</StyledTag>
            <StyledTag>Rx</StyledTag>
            替诺福韦治疗乙肝病毒替诺福韦治疗乙肝病毒
          </Title>
          <StyledText>1毫克 * 14片</StyledText>
        </Content>
      </Container>
    </Li>
  </WhiteBook>
))

// @ts-ignore
const StyledButton = styled(Button)`
  height: 5rem;
  width: 8rem;
  background: ${props => props.theme.colors.red};
  border-radius: 0;
  font-size: ${props => props.theme.size.text}rem;
`

stories.add('delete button', () => (
  <WhiteBook>
    <StyledButton>删除</StyledButton>
  </WhiteBook>
))

stories.add('can delete', () => (
  <WhiteBook>
    <Li selectable canDelete >
      <Container>
        <Image src={logoSrc} />
        <Content>
          <Title>
            <StyledTag style={{ background: theme.colors.blue }}>英国进口</StyledTag>
            <StyledTag style={{ background: theme.colors.red }}>Rx</StyledTag>
            替诺福韦治疗乙肝病毒替诺福韦治疗乙肝病毒
          </Title>
          <StyledText>1毫克 * 14片</StyledText>
        </Content>
      </Container>
    </Li>
  </WhiteBook>
))
