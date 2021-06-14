import React, {
  HtmlHTMLAttributes, ReactNodeArray, useState, TouchEventHandler, useRef, useEffect,
} from 'react'
import styled, { css } from 'styled-components'
import anime from 'animejs'
import { ANIME } from '../config'

const Wrapper = styled.div`
  background: blue;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ChildrenWrapper = styled.div`
  position: relative;
  width: 300%;
  transform: translateX(-100%);
`

const ChildWrapper = styled.div`
  height: 10em;
  display: inline-flex;
  width: ${100 / 3}%;
  justify-content: center;
  align-items: center;
`

const DotWrapper = styled.div`
  position: absolute;
  bottom: 0.5em;
  display: inline-block;
  width: 100%;
  text-align: center;
  pointer-events: none;
`

const Dot = styled.div<{ active: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: red;
  margin: 0 4px;
  display: inline-block;
  ${props => !props.active && css`
    opacity: 0.5;
  `}
`

// TODO：目前未适配PC端，需要进行desktop适配
export default (props: CarouselProps) => {
  const { children, className, ...others } = props
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [x, setX] = useState(0)
  const [offset, setOffset] = useState(0) // offset 记录了位置应该在原始位置的基础上平移多少
  const [speed, setSpeed] = useState(0)
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    anime({
      targets: ref.current?.querySelector('div'),
      translateX: offset,
      easing: ANIME.spring.noWobble,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const handleTouchStart: TouchEventHandler = (e) => {
    console.log('e: ', e)

    // 将offset与其对应的index累积保持,保证多次滑动效果
    setX(e.changedTouches[0].pageX)
  }

  const handleTouchMove: TouchEventHandler = (e) => {
    const diff = e.changedTouches[0].pageX - x
    setOffset(offset + diff)
    setSpeed(diff / (Date.now() - time))
    setTime(Date.now())
    setX(e.changedTouches[0].pageX)
  }

  const handleTouchEnd: TouchEventHandler = (e) => {
    // 根据滑动结束时的速度做相应的惯性滑行，targetX的值最终需限定在-100%, 0, 100%的像素值
    let targetX = offset + speed * speed * speed * 100

    // 判断targetX 在 -100%, 0, 100%之间离那个更近，重新设定targetX
    const wrapperWidth = ref.current?.clientWidth!
    targetX = Math.min(
      Math.abs(-targetX - wrapperWidth),
      Math.abs(targetX),
      Math.abs(wrapperWidth - targetX)
    )
    setOffset(targetX)
  }

  return (
    <Wrapper ref={ref}
      onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <ChildrenWrapper>
        <ChildWrapper className={className} {...others}>
          {index === 0 ? children[children.length - 1] : children[0]}
        </ChildWrapper>
        <ChildWrapper className={className} {...others}>
          {children[index]}
        </ChildWrapper>
        <ChildWrapper className={className} {...others}>
          {index === children.length - 1 ? children[0] : children[index + 1]}
        </ChildWrapper>
      </ChildrenWrapper>
      {/* 根据children的个数渲染dot个数 */}
      <DotWrapper>{children.map((d, i) => <Dot active={index === i} key={i} />)}</DotWrapper>
    </Wrapper>
  )
}

interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNodeArray
}