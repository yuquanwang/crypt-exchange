
import anime from 'animejs'
import { cover } from 'polished'
import React, { BaseHTMLAttributes, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { ANIME } from '../config'
import Mask from './Mask'


const StyledCard = styled.div`
  ${cover()}
  position: fixed;
  background: white;
  overflow: hidden;
  top: auto;
  bottom: 0;
  height: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 999;
`

const Children = styled.div<{ title?: string }>`
  padding: 2rem 1.5rem;
  ${props => props.title && css`
    padding-top: calc(55px + 2rem);
  `}
`

const Title = styled.h2`
  ${cover()}
  bottom: auto;
  font-weight: normal;
  text-align: center;
  margin: 0;
  height: 55px;
  line-height: 55px;
  background: ${props => props.theme.colors.background};
`

export default (props: PopUpProps) => {
  const { visible, onClose, confirmed, title, ...ohters } = props
  const ref = useRef<HTMLDivElement>(null)

  const [maskVisible, setMaskVisible] = useState(true)

  useEffect(() => {
    // children && ref.current && setHeight(ref.current.clientHeight)
    visible && anime({
      targets: ref.current,
      height: ref.current?.querySelector('div')?.clientHeight,
      easing: ANIME.spring.noWobble,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  useEffect(() => {
    if (visible !== undefined) {
      setMaskVisible(visible)
    }
  }, [visible])

  useEffect(() => {
    confirmed && close()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmed])

  const close = () => {
    visible && anime({
      targets: ref.current,
      height: 0,
      easing: ANIME.spring.stiff,
      update: (animation) => {
        animation.progress > 70 && onClose && onClose()
      }
    })
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    close()
  }

  return visible ? (
    <>
      {maskVisible && <Mask onClick={handleClick} />}
      <StyledCard ref={ref} onClick={e => e.preventDefault()} {...ohters} >
        {title && <Title>{title}</Title>}
        <Children title={title} className={props.className} style={props.style} >
          {props.children}
        </Children>
      </StyledCard>
    </>) : null
}

interface PopUpProps extends BaseHTMLAttributes<HTMLDivElement> {
  visible?: boolean
  confirmed?: boolean
  title?: string
  onClose(): void
}