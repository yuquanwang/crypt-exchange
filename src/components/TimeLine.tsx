import React, { Props } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import moment from 'moment'
import Icon, { IconType } from './Icon'

const gray = lighten(0.8, '#000')

const Container = styled.div<{ height: string }>`
  height: ${props => props.height};
  display: flex;
  justify-content: space-between;
  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
const Left = styled.div<{ fadeLeft?: boolean }>`
  font-size: ${props => props.theme.size.text - 0.2}rem;
  max-width: 20%;
  ${props => props.fadeLeft && `
    color: ${lighten(0.6, '#000')};
  `}
`
const Middle = styled.div`
  position: relative;
  height: 100%;
`
const Right = styled.div`
  font-size: ${props => props.theme.size.text + 0.2}rem;
  max-width: 75%;
`

const Item = styled.div<{ fadeHistory?: boolean, align?: 'center' | 'start' }>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.align || 'center'};
  height: ${props => (props.theme.size.text + 0.2) * 1.2}rem;
  width: auto;
  ${props => props.fadeHistory && `
    color: ${gray};
  `}
`

const Line
  = styled.div<{ fadeHistory?: boolean, mark?: 'icon' | 'dot', align?: 'center' | 'start' }>`
  position: absolute;
  width: 1px;
  height: calc(100% - ${props => props.theme.size.text}rem);
  background: ${props => props.fadeHistory ? gray : props.theme.colors.primary};
  left: ${props => props.mark === 'icon' ? 'calc(1.2rem - 0.5px)' : 'calc(0.5rem - 0.5px)'};
  ${props => props.align !== 'start' && `top: ${props.theme.size.text / 2}rem;`}
  z-index: 0;
`

const Dot = styled.div<{ fadeHistory?: boolean }>`
  display: inline-block;
  background: ${props => props.fadeHistory ? gray : props.theme.colors.primary};
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  z-index: 1;
`

const IconWrapper = styled.div<{ first?: boolean }>`
  background: ${props => props.first ? props.theme.colors.primary : '#fff'};
  border-radius: 10rem;
  border: 1px solid ${props => props.first ? props.theme.colors.primary : gray};
  width: 2.4rem;
  height: 2.4rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0;
    width: ${props => props.theme.size.text - 0.4}rem;
  }
`

export default (props: TimeLinePorps) => {
  const span = Number(props.span.match(/^\d+([.]{1}\d+){0,1}/)![0])
  const height = props.span
    .replace(/^\d+([.]{1}\d+){0,1}/, (span * props.data.length - span).toString())

  return (
    <Container height={height}>
      <Left fadeLeft={props.fadeLeft}>
        {props.data
          .map((item, index) => (
            <Item
              key={item.timestamp || item.timeDesc || item.desc}
              fadeHistory={index !== 0 && props.fadeHistory}
              align={props.alignItem}>
              {item.timestamp && <div>{moment(item.timestamp).format('MM-DD HH:MM')}</div>}
              <div>{item.timeDesc}</div>
            </Item>
          ))}
      </Left>
      <Middle>
        <Line fadeHistory={props.fadeHistory} mark={props.mark} align={props.alignItem} />
        {props.data
          .map((item, index) => (
            <Item key={item.timestamp || item.timeDesc || item.desc} align={props.alignItem}>
              {item.icon ? (
                <IconWrapper first={index === 0} >
                  <Icon type={item.icon} fill={index !== 0 ? gray : 'white'} />
                </IconWrapper>
              ) : <Dot key={index} fadeHistory={index !== 0 && props.fadeHistory} />}
            </Item>
          ))}
      </Middle>
      <Right>{props.data.map((item, index) => (
        <Item
          key={item.timestamp || item.timeDesc || item.desc}
          fadeHistory={index !== 0 && props.fadeHistory}
          align={props.alignItem}>
          {item.desc}
        </Item>
      ))}</Right>
    </Container>
  )
}

interface TimeLinePorps extends Props<HTMLDivElement> {
  data: TimeLineItem[]
  span: string
  fadeLeft?: boolean
  fadeHistory?: boolean
  mark?: 'dot' | 'icon'
  alignItem?: 'start' | 'center'
}

interface TimeLineItem {
  timestamp?: number
  timeDesc?: string
  title?: string
  desc: string
  icon?: IconType
}

