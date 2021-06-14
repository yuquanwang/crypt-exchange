import React, {Props, useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import anime from 'animejs'
import logoUrl from '../assets/ball.svg'
import { ANIME } from '../config'
import Mask from './Mask'
import Icon from './Icon'
import Card from './Card'

const StyledCard = styled(Card)`
  padding: 3.0rem 5.0rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

export default (props: ModalConfirmProps) => {

  const { onCancel,onConfirm } = props
  const [shown,setShown] = useState(1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = ref.current?.querySelector('section')
    shown &&  anime({
      targets: card,
      width: ['0%', '100%'],
      opacity: [0, 1],
      easing: ANIME.spring.noWobble
    })
  }, [shown])

  return shown ? (
    <Mask ref={ref}>
      <StyledCard>
           <div>
               <p>获取您的位置，用于搜索</p>
               <p>DTP药房</p>
           </div>
           <ul>
                <li onClick={() => {
                    props.onCancel && props.onCancel()
                }}>取消</li>
                <li onClick={() => {
                    props.onConfirm && props.onConfirm()
                }}>授权</li>
           </ul>
      </StyledCard>
    </Mask>
  ) : null
}

interface ModalConfirmProps extends Props<HTMLDivElement> {
  onCancel?:Function
  onConfirm?: Function
}