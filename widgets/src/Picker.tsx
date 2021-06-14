
import anime, { AnimeInstance } from 'animejs'
import { lighten } from 'polished'
import React, { TouchEventHandler, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ANIME } from './config'
import Popup from './Popup'

const height = 250
const ITEM_HEIGHT = 45
const headerHeight = 60

const Header = styled.div`
  background: ${props => props.theme.colors.background};
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  width: 100%;
  color: ${lighten(0.2, '#000')};
  text-align: center;
  border-radius: 1.5rem 1.5rem 0 0;
`

const StyledSpan = styled.span`
  position: absolute;
  right: 2.0rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

export const TouchListener = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  touch-action: none;
`

// hightlight selected item
const StyledItem = styled.div<{ active?: boolean }>`
  height: ${ITEM_HEIGHT}px;
  line-height: ${ITEM_HEIGHT}px;
  color: ${props => props.active ? props.theme.colors.primary : lighten(0.6, '#000')};
  text-align: center;
  background: transparent;
`

const SelectedBar = styled.div`
  position: absolute;
  height: ${ITEM_HEIGHT}px;
  width: 100%;
  border-top: 1px solid ${lighten(0.8, '#000')};
  border-bottom: 1px solid ${lighten(0.8, '#000')};
  /* 一半的高度-半格长度为中间位置 */
  top: ${(height - ITEM_HEIGHT) / 2 - 1}px;
  pointer-events: none;
`

const StylePopup = styled(Popup)`
  padding: 0;
`

const ColumnsWrapper = styled.div`
  position: relative;
  height: ${height}px;
  display: flex;
  justify-content: space-around;
  padding: ${(height - 5 * ITEM_HEIGHT) / 2}px 0;
`

const Column = (props: PickerColumnProps) => {
  const { items, initialIndex, onChange } = props
  const ref = useRef<HTMLDivElement>(null)

  const [y, setY] = useState(0)
  const [offset, setOffset] = useState(0) // offset 记录了位置应该在原始位置的基础上平移多少
  const [time, setTime] = useState(Date.now())
  const [speed, setSpeed] = useState(0)
  const [index, setIndex] = useState(0)
  const [light, setLight] = useState(true)
  const [touching, setTouching] = useState(false)
  let animation: AnimeInstance | null = null

  // props.index变化，计算应该到达的新位置，根据应该到达的位置，设置offset值
  useEffect(() => {
    ref.current && init()
    if (typeof initialIndex !== 'number' || index === initialIndex) return
    const tempOffset = - ITEM_HEIGHT * props.initialIndex
    setIndex(initialIndex)
    setOffset(tempOffset)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialIndex, items])

  useEffect(() => {
    init()
    if (touching) animation?.seek(animation.duration)
    else animation?.restart()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  useEffect(() => {
    light && onChange(items[index], index)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [light])

  const init = () => {
    if (!animation) animation = anime({
      targets: ref.current?.querySelector('div'),
      translateY: offset,
      easing: ANIME.spring.noWobble,
      begin: () => {
        setLight(false)
      },
      update: (animation) => {
        animation.progress > 70 && setLight(true)
      },
      autoplay: false
    })
  }

  const handleTouchStart: TouchEventHandler = (e) => {
    e.preventDefault()
    if (items.length === 0) return

    // 将offset与其对应的index累积保持,保证多次滑动效果
    setTouching(true)
    setY(e.changedTouches[0].pageY)
    setSpeed(0)
  }

  const handleTouchMove: TouchEventHandler = (e) => {
    e.preventDefault()

    if (items.length === 0) return

    const diff = e.changedTouches[0].pageY - y
    setOffset(offset + diff)
    setSpeed(diff / (Date.now() - time))
    setTime(Date.now())
    setY(e.changedTouches[0].pageY)
  }

  const handleTouchEnd: TouchEventHandler = () => {
    setTouching(false)
    if (items.length === 0) return

    // 根据滑动结束时的速度做相应的惯性滑行
    let targetY = offset + speed * speed * speed * 100
    const limit = (props.items.length - 1) * ITEM_HEIGHT

    // 超出整个数列长度，则需保证还在可渲染到数列的范围内
    if (targetY > 0) {
      targetY = 0
    } else if (Math.abs(targetY) > limit) {
      targetY = -limit
    } else {
      // 映射所在的index, 保证选项渲染在SelectedBar中间位置
      const units = Math.round(targetY / (ITEM_HEIGHT))
      targetY = units * ITEM_HEIGHT
    }
    setOffset(targetY)
    setIndex(- targetY / (ITEM_HEIGHT))
  }

  const handleItemClick = (i: number) => {
    setIndex(i)
    setOffset(- i * ITEM_HEIGHT)
  }

  // TODO: 兼容无TouchEvents的设备，如PC
  return (
    <TouchListener ref={ref}
      onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div>
        <StyledItem />
        <StyledItem />
        {props.items.map((item, i) => (
          <StyledItem key={typeof item === 'object' ? item.id : i} active={index === i && light}
            onClick={() => handleItemClick(i)}>
            {typeof item === 'object' ? item.name : item}
          </StyledItem>
        ))}
        <StyledItem />
        <StyledItem />
      </div>
    </TouchListener>
  )
}

export default (props: PickerProps) => {
  const { initialIndice = [0, 0, 0], visible, columns, onConfirm, data, title, onClose } = props

  if (data.length === 0) return (<></>)

  const [indice, setIndice] = useState(initialIndice || [0, 0, 0])
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    !visible && setIndice([0, 0, 0])
  }, [visible])

  const handleColumn0Change = (_: any, index: number) => {
    setIndice([index, 0, 0])
  }

  const handleColumn1Change = (_: any, index: number) => {
    setIndice([indice[0], index, 0])
  }

  const handleColumn2Change = (_: any, index: number) => {
    setIndice([indice[0], indice[1], index])
  }

  const handleConfirm = () => {
    setConfirmed(true)
    switch (columns) {
      case 2: return onConfirm([indice[0], indice[1]])
      case 3: return onConfirm(indice)
      default: return onConfirm([indice[0]])
    }
  }

  let contents
  if (visible) {
    switch (columns) {
      case 2:
        contents = (
          <>
            <Column items={data} initialIndex={initialIndice[0]} onChange={handleColumn0Change} />
            <Column
              items={(data[indice[0]] as ItemObj).children || []}
              initialIndex={initialIndice[1]}
              onChange={handleColumn1Change} />
          </>
        )
        break
      case 3:
        contents = (
          <>
            <Column items={data} initialIndex={initialIndice[0]} onChange={handleColumn0Change} />
            <Column
              items={(data[indice[0]] as ItemObj).children || []}
              initialIndex={initialIndice[1]}
              onChange={handleColumn1Change} />
            <Column
              // @ts-ignore
              items={data[indice[0]].children[indice[1]].children}
              initialIndex={initialIndice[2]}
              onChange={handleColumn2Change} />
          </>
        )
        break
      default: contents = (
        <Column items={data} initialIndex={initialIndice[0]} onChange={handleColumn0Change} />
      )
    }
  }

  const handlePopupClose = () => {
    setConfirmed(false)
    onClose && onClose()
  }

  return (
    <StylePopup visible={visible} confirmed={confirmed} onClose={handlePopupClose}>
      <Header>
        {title}
        <StyledSpan onClick={handleConfirm}>确定</StyledSpan>
      </Header>
      <ColumnsWrapper>
        {visible && contents}
        <SelectedBar onTouchEnd={e => e.preventDefault()} />
      </ColumnsWrapper>
    </StylePopup>
  )
}

interface ItemObj {
  id: string | number
  name: string | number
  children?: ItemObj[]
}

type PickerItem = string | number | ItemObj

interface PickerColumnProps {
  items: PickerItem[]
  initialIndex: number
  onChange(item: PickerItem, index: number): void
}

interface PickerProps {
  visible: boolean
  title: string
  data: PickerItem[]
  columns?: 2 | 3
  initialIndice?: number[]
  onConfirm(ids: number[]): void
  onClose?: () => void
}