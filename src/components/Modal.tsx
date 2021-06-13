import React, { Props, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import anime from 'animejs'
import logoUrl from '../assets/ball.svg'
import { ANIME } from '../config'
import Mask from './Mask'
import Icon from './Icon'
import Card from './Card'

const StyleImg = styled.img`
  margin-bottom: 1.5rem;
`

const StyledCard = styled(Card)`
  padding: 3.0rem 5.0rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

const StyledMask = styled(Mask) <{ type: 'image' | 'component' }>`
  ${props => props.type !== 'image' && css`
    padding: 3.0rem 4.0rem;
  `}
`

export default (props: ModalProps) => {
  const { type = 'component', shown } = props

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = []
    const image = ref.current?.querySelector('img')
    const card = ref.current?.querySelector('section')
    image && targets.push(image)
    card && targets.push(card)
    shown && targets.length > 0 && anime({
      targets: targets,
      width: ['0%', '100%'],
      opacity: [0, 1],
      easing: ANIME.spring.noWobble
    })
  }, [shown])

  return shown ? (
    <StyledMask ref={ref} type={type}>
      {props.type === 'image' ?
        (<StyleImg alt="加载失败" src={logoUrl} />) : (<StyledCard>{props.children}</StyledCard>)}
      {props.closable && <Icon type='audit' color='red' />}
    </StyledMask>
  ) : null
}

interface ModalProps extends Props<HTMLDivElement> {
  type?: 'image' | 'component'
  closable?: boolean
  shown: boolean
}
