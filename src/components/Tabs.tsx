import React, {
  useState, useEffect, useRef, ReactNode, Props, HtmlHTMLAttributes
} from 'react'
import styled, { css } from 'styled-components'
import { lighten, cover } from 'polished'
import anime, { AnimeInstance } from 'animejs'
import { theme, ANIME } from '../config'
import { shadow } from '../GlobalStyle'
import Icon, { IconType } from './Icon'
import Tag from './Tag'

const color = lighten(0.2, '#000')

// TODO: fixed Icon和Label对齐的问题
const StyledLabel = styled.label<{ active?: boolean, underline?: boolean }>`
  height: 4rem;
  display: inline-flex;
  color: ${props => props.active ? props.theme.colors.primary : color};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.underline && css`
    font-weight: ${props.active ? 500 : 400};
    color: ${color};
  `}
  svg {
    width: 2.1rem;
  }
`

export const Tab = (props: TabProps) => {
  const { className, active, icon, onClick, underline, label } = props

  return (
    <StyledLabel className={className} underline={underline} active={active}
      onClick={onClick} >
      {icon && (
        <Icon
          type={active ? `${icon}_active` as IconType : icon}
          fill={active ? theme.colors.primary : color} />
      )}
      <span>{label}</span>
    </StyledLabel>
  )
}

const StyledTabs = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const BottomLine = styled.div`
  top: 80%;
  position: absolute;
  height: 1px;
  background: ${props => props.theme.colors.primary};
  box-shadow: ${shadow};
`

const Translator = styled.div`
  ${cover()}
`

const Children = (props: { children?: ReactNode, left: boolean, style?: object }) => {
  const { left, style, children } = props
  const ref = useRef(null)

  useEffect(() => {
    let animation: AnimeInstance | null = anime({
      targets: ref.current,
      translateX: [left ? '-100%' : '100%', '0%'],
      opacity: [0, 1],
      autoplay: false,
      easing: ANIME.spring.noWobble
    })

    animation.play()

    return () => {
      animation?.seek(animation.duration)
      animation = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Translator ref={ref} style={style}>{children}</Translator>
  )
}

const StyledTags = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

// @ts-ignore
const StyledTag = styled(Tag) <{ active: boolean, disabled: boolean }>`
  border-radius: 3.3rem;
  margin-right: 1.5rem;
  color: ${lighten(0.6, '#000')};
  border: 1px solid ${lighten(0.8, '#000')};
  width: auto;
  font-size: ${props => props.theme.size.text - 0.2}rem;
  padding: 0 1.2em;
  ${props => props.active && css`
    background: ${props.theme.colors.primary} !important;
    color: #fff !important;
    border: none !important;
  `}
  ${props => props.disabled && css`
    background: ${props.theme.colors.gray};
    color: #ccc;
    border: none;
  `}
`

export const TagTabs = (props: TagTabsProps) => {
  const { className, tabs, children, onChange } = props
  const ref = useRef<HTMLDivElement>(null)

  const initIndex = tabs.findIndex(tab => tab.active)
  const [index, setIndex] = useState(initIndex > -1 ? initIndex : 0)
  const [fromLeft, setFromLeft] = useState(true)
  const [childrenTop, setChildrenTop] = useState(0)

  useEffect(() => {
    setChildrenTop(ref.current!.clientHeight)
    const activeIndex = tabs.findIndex(tab => tab.active)
    setIndex(activeIndex > -1 ? activeIndex : 0)
  }, [tabs])

  const handleClick = (i: number) => {
    if (i === index) return

    // 判断tanslate方向
    i < index ? setFromLeft(true) : setFromLeft(false)
    setIndex(i)
    onChange && onChange(i)
  }

  return (
    <>
      <StyledTags ref={ref} className={className}>
        {tabs.map((item, i) => (
          <StyledTag key={i.toString()} active={index === i} disabled={item.disabled === true}
                     onClick={() => !item.disabled && handleClick(i)}>
            {item.label}
          </StyledTag>
        ))}
      </StyledTags>
      {children && (
        <Children key={index} left={fromLeft} children={children} style={{ top: childrenTop }} />
      )}
    </>
  )
}

const BottomTabs = styled(StyledTabs)`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  height: 5rem;
  font-size: ${props => props.theme.size.text - 0.4}rem;
  border-top: 1px solid #EEEEEE;
  padding-top: 0.5rem;
`

export const BottomTabBar = (props: BottomTabBarProps) => {
  const { className, activeTab, tabs, onChange } = props
  const [index, setIndex] = useState(0)

  // 刷新页面，tab高亮需根据location的值变化
  useEffect(() => {
    setIndex(activeTab)
  }, [activeTab])

  const handleClick = (i: number) => {
    if (i === index) return

    // 判断tanslate方向
    setIndex(i)
    onChange(i, tabs[i].path)
  }

  return (
    <BottomTabs className={className}>
      {tabs.map((item, i) => (
        <Tab
          key={i}
          label={item.label}
          icon={item.icon}
          path={item.path}
          active={i === index}
          onClick={() => handleClick(i)} />
      ))}
    </BottomTabs>
  )
}

export default (props: TabsProps) => {
  const { className, activeTab = 0, underline, tabs, children, onChange } = props
  const ref = useRef<HTMLDivElement>(null)

  const [index, setIndex] = useState(activeTab)
  const [fromLeft, setFromLeft] = useState(true) // 判断切换方向，用于可用于children组件动画
  const [tabsHeight, setTabsHeight] = useState(0)

  useEffect(() => {
    setTabsHeight(ref.current!.clientHeight)
  }, [])

  // 刷新页面，tab高亮需根据location的值变化
  useEffect(() => {
    setIndex(activeTab)
  }, [activeTab])

  useEffect(() => {
    // 过滤掉index与activeTab一致的change
    if (index === activeTab) return

    tabs.length > index && onChange(index)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tabs.length])

  useEffect(() => {
    // 交互动画
    const tab = ref.current?.querySelectorAll('label')[index]
    const target = ref.current?.querySelector('div:last-of-type')
    const translateX = tab?.offsetLeft || 0
    const width = tab?.clientWidth || 0
    anime({
      targets: target,
      easing: ANIME.spring.noWobble,
      left: translateX,
      width,
      scaleX: [0.3, 0.7],
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tabs.length])

  const handleClick = (i: number) => {
    if (i === index) return

    // 判断tanslate方向
    i < index ? setFromLeft(true) : setFromLeft(false)
    setIndex(i)
  }

  return (
    <>
      <StyledTabs ref={ref} className={className}>
        {tabs.map((item, i) => (
          <Tab key={i} label={item.label} active={i === index} underline={underline}
            onClick={() => handleClick(i)} />
        ))}
        {underline && <BottomLine />}
      </StyledTabs>
      {children && (
        <Children key={index} left={fromLeft} children={children} style={{ top: tabsHeight }} />
      )}
    </>
  )
}

export interface TabProps extends HtmlHTMLAttributes<HTMLLabelElement> {
  icon?: IconType
  label: string
  active?: boolean
  path?: string
  underline?: boolean // 是否显示底部指示条
  disabled?: boolean
}

interface TabsProps {
  tabs: TabProps[]
  activeTab?: number
  className?: string
  underline?: boolean
  children?: ReactNode
  underlineTop?: string
  onChange(index: number, path?: string): void
}

interface TagTabsProps extends Props<HTMLDivElement> {
  tabs: TabProps[]
  className?: string
  children?: ReactNode
  activeTab?: number
  onChange?: (index: number) => void
}

interface BottomTabBarProps {
  tabs: TabProps[]
  activeTab: number
  className?: string
  onChange(index: number, path?: string): void
}