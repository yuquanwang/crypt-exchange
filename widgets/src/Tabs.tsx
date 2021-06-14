import anime from "animejs"
import { cover, em } from "polished"
import React, { HtmlHTMLAttributes, ReactElement, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { ANIME } from "./config"

const Wrapper = styled.div`
  > nav {
    /* 用于覆盖标题的样式 */
  }
  > section {
    /* 用于覆盖视窗的样式 */
  }
`

const LabelWrapper = styled.nav<{ index: number }>`
  ${cover()}
  position: fixed;
  background: #fff;
  bottom: auto;
  height: ${em(60)};
  padding: 0 ${em(15)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  > * {
    cursor: pointer;
  }
  ${props => css`
    > :nth-child(${props.index + 1}) {
      font-weight: bold;
    }
  `}
`

const Indicator = styled.div`
  top: 80%;
  position: absolute;
  height: 1px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 1px 1px 2px ${props => props.theme.colors.primary}, 1px 1px 2px ${props => props.theme.colors.primary};
`

const ChildWindow = styled.div<{ length: number }>`
  width: ${props => 100 / props.length}%;
  height: 100%;
  overflow-y: scroll;
`

const ChildrenWindow = styled.section<{ top?: number }>`
  ${cover()}
  position: fixed;
  top: ${props => props.top}px;
`

const ChildrenWrapper = styled.div<{ children: Array<ReactElement> }>`
  width: ${props => props.children.length * 100}%;
  display: flex;
  height: 100%;
`

export default (props: TabBarProps) => {
  const { tabs, children, index, indicator = true, ...others } = props
  const ref = useRef<HTMLDivElement>(null)
  const translator = useRef<HTMLDivElement>(null)
  const indicatoref = useRef<HTMLDivElement>(null)
  const [barHeight, setBarHeight] = useState(60)

  useEffect(() => {
    setBarHeight(ref.current?.clientHeight || 60)
  }, [])

  useEffect(() => {
    // tabbar标题交互动画效果
    const tab = ref.current?.querySelector(`:nth-child(${index + 1})`) as HTMLElement
    const translateX = tab?.offsetLeft || 0
    const width = tab?.clientWidth || 0
    anime({
      targets: indicatoref.current,
      easing: ANIME.spring.noWobble,
      left: translateX,
      width,
      scaleX: [0.3, 0.7],
    })

    // 移动视窗至index所在tab的数据窗口
    if (!children) return
    anime({
      targets: translator.current,
      translateX: `${-index * 100 / children!.length}%`,
      easing: ANIME.spring.noWobble,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tabs.length])

  return (
    <Wrapper {...others}>
      <LabelWrapper ref={ref} index={index}>
        {tabs}
        {indicator && <Indicator ref={indicatoref} />}
      </LabelWrapper>
      {children && (
        <ChildrenWindow top={barHeight}>
          <ChildrenWrapper ref={translator}>
            {children.map((child) => {
              return (
                <ChildWindow key={child.key!} length={children.length}>{child}</ChildWindow>
              )
            })}
          </ChildrenWrapper>
        </ChildrenWindow>)}
    </Wrapper>
  )
}

interface TabBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  tabs: Array<ReactElement>
  index: number
  children?: Array<ReactElement>
  indicator?: boolean
}