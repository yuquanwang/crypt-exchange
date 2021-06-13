import React, {
  HtmlHTMLAttributes, useState, TouchEventHandler, useEffect, MouseEventHandler, useRef
} from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import anime from 'animejs'
import { ANIME } from '../config'
import Icon from './Icon'
import Button from './Button'

const StyledLi = styled.li`
  position: relative;
`

const IconContainer = styled.div<{ active?: boolean }>`
  display: inline-block;
  min-width: 2.4rem;
  min-height: 2.4rem;
  width: 2.4rem;
  border: ${props => props.active ? 'none' : `1px solid ${lighten(0.8, '#000')}`};
  border-radius: 2.4rem;
`

const StyledButton = styled(Button)`
  position: absolute;
  height: 100%;
  left: calc(100% + 1.5rem);
  top: 0;
  bottom: 0;
  width: 200%;
  padding-left: 6rem;
  background: ${props => props.theme.colors.red};
  border-radius: 0;
  font-size: ${props => props.theme.size.text}rem;
  text-align: left;
`

export const Li = (props: ListItemProps) => {
  const buttonOffset = 150

  const ref = useRef<HTMLLIElement>(null)
  const [selected, setSelected] = useState(false)
  const [offset, setOffset] = useState(0)
  const [x, setX] = useState(0)
  const [time, setTime] = useState(Date.now())
  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    // 禁止从原始位置向右滑动
    if (offset > 0) {
      setOffset(0)
      return
    }

    anime({
      targets: ref.current,
      translateX: offset,
      easing: ANIME.spring.stiff
    })
  }, [offset])

  const handleSelect = () => {
    setSelected(!selected)
    props.onSelect && props.onSelect()
  }

  const handleTouchStart: TouchEventHandler = (e) => {
    setX(e.changedTouches[0].pageX)
  }

  // 监听左右滑动事件，并移动item,移入删除按钮
  const handleTouchMove: TouchEventHandler = (e) => {
    const diff = e.changedTouches[0].pageX - x
    setOffset(offset + diff)
    setSpeed(diff / (Date.now() - time))
    setTime(Date.now())
    setX(e.changedTouches[0].pageX)
  }

  const handleTouchEnd: TouchEventHandler = (e) => {
    const targetX = offset + speed * speed * speed * 100
    targetX < - buttonOffset + 20 ? setOffset(-buttonOffset) : setOffset(0)
  }

  const handleClickContainer: MouseEventHandler<HTMLLIElement> = (e) => {
    props.selectable && setOffset(0)
    props.onClick && props.onClick(e)
  }

  const handleDelete = () => {
    props.onDelete && props.onDelete()
  }

  return props.canDelete ? (
    <StyledLi
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClickContainer}>
      {props.selectable && (
        <IconContainer active={selected} onClick={handleSelect}>
          {selected && <Icon type='ball' />}
        </IconContainer>
      )}
      {props.children}
      {props.canDelete && <StyledButton onClick={handleDelete}>删除</StyledButton>}
    </StyledLi>
  ) : (
      <StyledLi onClick={handleClickContainer}>
        {props.selectable && (
          <IconContainer active={selected} onClick={handleSelect}>
            {selected && <Icon type='ball' />}
          </IconContainer>
        )}
        {props.children}
      </StyledLi>
    )
}

const StyledUl = styled.ul`

`

export default (props: HtmlHTMLAttributes<HTMLUListElement>) => (
  <StyledUl {...props}>
    {props.children}
  </StyledUl>
)

interface ListItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  selectable?: boolean
  canDelete?: boolean
  onSelect?: () => void
  onDelete?: () => void
}