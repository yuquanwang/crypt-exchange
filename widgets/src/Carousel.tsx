import React, {
  HtmlHTMLAttributes, ReactNodeArray, useState, useRef, useEffect, TouchEventHandler,
} from 'react'
import styled, { css } from 'styled-components'
import anime from 'animejs'
import { ANIME } from './config'

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  touch-action: none;
`

const ChildrenWrapper = styled.div`
  position: relative;
  width: 300%;
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
  background: #fff;
  margin: 0 4px;
  display: inline-block;
  ${props => !props.active && css`
    opacity: 0.5;
  `}
`

// TODO：目前未适配PC端，需要进行desktop适配
export default (props: CarouselProps) => {
  const { children, className, autoplay = true, interval = 3000, ...others } = props
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0) // offset 记录了位置应该在原始位置的基础上平移多少
  const [index, setIndex] = useState(0)
  const [x, setX] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [touching, setTouching] = useState(false)
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const animation = anime({
      targets: ref.current?.querySelector('div'),
      translateX: -ref.current?.clientWidth,
      autoplay: false
    })
    animation.seek(animation.duration)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // index改变时，根据offset设置伪偏移值，从伪偏移值过渡为正常显示区
  useEffect(() => {
    const wrapperWidth = ref.current?.clientWidth
    offset !== 0 && anime({
      targets: ref.current.querySelector('div'),
      translateX: [(offset > 0 ? -1 : 1) * offset, -wrapperWidth],
      easing: ANIME.spring.noWobble,
      complete: () => setOffset(0)
    })

    offset === 0 && anime({
      targets: ref.current?.querySelector('div'),
      translateX: [0, -wrapperWidth],
      easing: ANIME.spring.noWobble,
      complete: () => setOffset(0)
    })

    let timer: number
    if (autoplay) {
      timer = setTimeout(() => {
        setIndex(index === children.length - 1 ? 0 : index + 1)
      }, interval)
    }

    return () => clearTimeout(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // 控制touch过程中的响应未造成index值变化的恢复
  useEffect(() => {
    if (offset === 0) return
    const wrapperWidth = ref.current.clientWidth
    if (touching) {
      const animation = anime({
        targets: ref.current.querySelector('div'),
        translateX: offset - wrapperWidth,
        autoplay: false
      })
      animation.seek(animation.duration)
    } else if (offset > - wrapperWidth / 2 && offset < wrapperWidth / 2) {
      anime({
        targets: ref.current.querySelector('div'),
        translateX: -wrapperWidth,
        easing: ANIME.spring.noWobble,
        complete: () => setOffset(0)
      })
    }

  }, [offset, touching])

  const handleTouchStart: TouchEventHandler = (e) => {
    e.preventDefault()
    if (children.length === 0) return

    setTouching(true)
    setX(e.changedTouches[0].pageX)
    setSpeed(0)
  }

  const handleTouchMove: TouchEventHandler = (e) => {
    e.preventDefault()

    if (children.length === 0) return

    const diff = e.changedTouches[0].pageX - x
    setOffset(offset + diff)
    setSpeed(diff / (Date.now() - time))
    setTime(Date.now())
    setX(e.changedTouches[0].pageX)
  }

  // 此时计算目标窗口，每次目标窗口变更都将计算伪偏移值
  const handleTouchEnd: TouchEventHandler = () => {
    setTouching(false)
    if (children.length === 0) return
    let targetX = offset + speed * speed * speed * 100
    setOffset(targetX)

    const wrapperWidth = ref.current?.clientWidth!
    // 将当前窗口移后一定阈值，进入下一屏
    if (targetX < - wrapperWidth / 2) setIndex(index === children.length - 1 ? 0 : index + 1)
    if (targetX > wrapperWidth / 2) setIndex(index === 0 ? children.length - 1 : index - 1)
  }

  return (
    <Wrapper ref={ref}
      onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <ChildrenWrapper >
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
      {/* 渲染dot */}
      <DotWrapper>{children.map((_, i) => <Dot active={index === i} key={i} />)}</DotWrapper>
    </Wrapper>
  )
}

interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNodeArray
  autoplay?: boolean
  interval?: number
}