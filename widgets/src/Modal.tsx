
import anime from 'animejs'
import { lighten } from 'polished'
import React, { useEffect, useRef, useState, HtmlHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as CloseIcon } from './assets/close.svg'
import Card from './Card'
import { ANIME } from './config'
import Mask from './Mask'

const Icon = styled(CloseIcon)`
  font-size: 1.6em;
  width: 1em;
	height: 1em;
  fill: ${props => props.theme.colors.red};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const StyledCard = styled(Card) <{ padding?: string, needConfirm: boolean }>`
  padding: ${props => props.padding ? props.padding : '2em 2em'};
  text-align: center;
  position: relative;
  overflow: visible; 
  ${props => props.needConfirm && css`
    width: 80%;
    padding-bottom: 5em;
  `}
`

const CancelConfirm = styled.div`
  height: 3em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  ::before{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${lighten(0.8, '#000')};
    position: absolute;
    top: 0;
    transform: scaleX(0.98);
  }
  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: ${lighten(0.8, '#000')};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-0.5px);
  }
  button {
    border: none;
    background: transparent;
    width: 50%;
    color: ${lighten(0.6, '#000')};
    border-radius: 0;
    height: 100%;
  }
  button:last-child {
    color: ${props => props.theme.colors.primary};
  }
`

export default (props: ModalProps) => {
  const { visible, onClose, padding, children, closable, onConfirm, onCancel, ...others } = props
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(visible)

  useEffect(() => setShown(visible), [visible])

  useEffect(() => {
    const card = ref.current?.querySelector('section')
    shown && anime({
      targets: card,
      scaleX: [0, 1],
      scaleY: [0, 1],
      opacity: [0, 1],
      easing: ANIME.spring.noWobble,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown])

  const handleClose = () => {
    setShown(false)
    onClose && onClose()
  }

  const handleCancel = () => {
    onCancel && onCancel()
  }

  const handleConfirm = () => {
    onConfirm && onConfirm()
  }

  return shown ? (
    <Mask ref={ref}>
      <StyledCard {...others} padding={padding} needConfirm={!!onConfirm} >
        {children}
        {onConfirm && (
          <CancelConfirm>
            <button onClick={handleCancel}>取消</button>
            <button onClick={handleConfirm}>确认</button>
          </CancelConfirm>)}
      </StyledCard>
      {closable && <Icon onClick={handleClose} />}
    </Mask>
  ) : null
}

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  closable?: boolean
  padding?: string
  animeRange?: AnimeRange
  visible: boolean
  onClose?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

interface AnimeRange {
  start: string
  end: string
}
