import React, {Props, useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import anime from 'animejs'
import { ReactComponent as Face } from '../assets/smile.svg'
import { ANIME } from '../config'
import Mask from './Mask'
import Icon from './Icon'
import Card from './Card'

const StyledCard = styled(Card)`
  padding: 3.0rem 5.0rem;
  margin-bottom: 1.5rem;
  text-align: center;
  .cls-1 {
    fill:#12CD9F;
  }
  svg {
    width: 4.8em;
  }
  div.noticeBold{
    font-size:1.6em;
    font-weight:bold;
    padding:0.8em 0em 0.1em 0em;
  }
  div.notice{
    font-weight:400;
    font-size:1.1em;
    color:#666666;
    padding-bottom:1.5em;
  }
  button{
    height: 2.6em;
    width: 100%;
    border-radius: 2.4em;
    font-size: 1.2em;
  }
  
`

export default (props: ModalConfirmProps) => {

    const {
      title = "审核已提交成功",
      title_sub = "即将开始审核，请耐心等候",
      title_button = "我知道了",
      onConfirm,
    } = props

    const [shown,setShown] = useState(true)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
    const card = ref.current?.querySelector('section')
    shown &&  anime({
      targets: card,
      width: ['100%', '100%'],
      opacity: [0, 1],
      easing: ANIME.spring.stiff
    })
    }, [shown])

    const CurrentMask = styled(Mask)`
        padding: 3rem 3rem;
        .cls-smile {
            fill: #12CD9F;
        }
    `
    const switchShow = ()=>{
      setShown(!shown)
      onConfirm && onConfirm()
    }
    return shown ? (
    <CurrentMask ref={ref}>
      <StyledCard>
          <Icon type="face" fill={'#12CD9F'}></Icon>
          <div className='noticeBold'>{ title }</div>
          <div className='notice'>{ title_sub }</div>
           <button onClick={switchShow}>{ title_button }</button>
      </StyledCard>
    </CurrentMask>
    ) : null
}

interface ModalConfirmProps extends Props<HTMLDivElement> {
        title?:string
    title_sub?:string
 title_button?:string
     onCancel?:Function
     onConfirm?: Function
}