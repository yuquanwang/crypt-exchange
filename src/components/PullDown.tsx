import React, { HtmlHTMLAttributes, useRef, useEffect, ReactNode } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { cover, em } from 'polished'
import { ANIME } from '../config'

const Container = styled.div`
  ${cover()}
  position: fixed;
  overflow: hidden;
  background: #fff;
  height: 0;
  >section {
    max-height: 70vh;
    overflow-y: scroll;
    padding: 0 ${em(20)};
  }
`

const Actions = styled.div`
  ${cover()}
  top: auto;
  height: auto;  
  button {
    &:active {
      opacity: 1;
    }
  }
`

export default (props: PullDownProps) => {
  const { visible, actions, ...others } = props
  const ref = useRef<HTMLDivElement>(null)
  const buttons = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const child = ref.current?.firstChild as HTMLDivElement
    const { clientHeight, offsetTop } = child!
    const tl = anime.timeline({ easing: ANIME.spring.noWobble })
    if (visible) {
      tl.add({ targets: ref.current, height: clientHeight! })
      tl.add({ targets: child, top: clientHeight + offsetTop * 2 }, 0)
    } else {
      tl.add({ targets: ref.current, height: 0, easing: ANIME.spring.noWobble })
      tl.add({ targets: child, top: offsetTop * 2, easing: ANIME.spring.noWobble }, 0)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    <Container ref={ref} {...others}>
      <section>{props.children}</section>
      {visible && actions && <Actions ref={buttons}>{actions}</Actions>}
    </Container>
  )
}

interface PullDownProps extends HtmlHTMLAttributes<HTMLDivElement> {
  visible?: boolean
  actions?: ReactNode
}