import anime from 'animejs'
import React, { HtmlHTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconRight } from '../assets/right.svg'
import { ANIME } from '../config'

const Container = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.yellow};
  border-radius: 3.5rem 0 0 3.5rem;
  font-size: ${props => props.theme.size.text - 0.2}rem;
  color: #fff;
  z-index: 999;
  cursor: pointer;
`

const Lead = styled.span`
  svg {
    font-size: 2.8rem;
  }
  margin: 0 0.4em;
`

const Right = styled(IconRight)`
  font-size: 1em;
`

export default (props: NailProps) => {
  const { lead, ...others } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // anime({
    //   targets: ref.current,
    //   translateX: [ref.current?.clientWidth, '0'],
    //   opacity: [0, 1],
    //   easing: ANIME.spring.noWobble
    // })
  }, [])

  return (
    // 直接使用svg作为icon
    <Container ref={ref} {...others}>
      <Lead>{lead}</Lead>{props.children}<Right fill='currentColor' />
    </Container>)
}

interface NailProps extends HtmlHTMLAttributes<HTMLDivElement> {
  lead: ReactNode
}