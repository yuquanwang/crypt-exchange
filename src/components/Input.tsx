import React, {
  FunctionComponent, useState, ChangeEvent, InputHTMLAttributes,
  ReactNode, FocusEventHandler, useEffect, useRef
} from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import anime from 'animejs'
import { ANIME } from '../config'
import Icon, { IconType } from './Icon'

const Container = styled.div`
  position: relative;
`

const height = 4.4

const Prefix = styled(Icon)`
  font-size: ${props => props.theme.size.text + 2}rem;
  // width: ${props => props.theme.size.text}rem;
  position: absolute;
  height: 100%;
  font-size: 2rem;
  position: absolute;
  left: 0.6rem;
  height: 100%;
`

const Suffix = styled(Icon)`
  font-size: ${props => props.theme.size.text}rem;
  width: ${props => props.theme.size.text}rem;
  position: absolute;
  height: 100%;
  right: 0;
  top: 2px;
  color:#999999;
`

const StyledInput = styled.input<InputProps>`
  width: ${props => props.clearable && props.value ? '86%' : '100%'};
  ${props => props.layout === "none" && css`
    border:none;
    text-align:right;
    outline: none;
    color: black;
    padding: 0;
    color:#999999;
  `}
  ${props => (props.layout === "primary" || !props.layout) && css`
    position: relative;
    border: none;
    height: ${height}rem;
    padding: 0 ${props.prefix ? '3rem' : '2.2rem'};
    border-radius: 2.2rem;
    ${!props.value ? `color: ${lighten(0.6, '#000')};` : ''}
    background: ${props.theme.colors.background};
    outline: none;
  `}
`

export const TextArea = styled.textarea`
    outline: none;
    width: 24.6rem;
    height: 6rem;
    padding: 1.3rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: ${props => props.theme.colors.background};
    line-height: 1.5rem;
    &::placeholder {
      font-size: ${props => props.theme.size.text - 0.2}rem;
    }
`

// action button in suffix
const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  const { clearable, re, prefix, action, onChange, onFocus, onBlur, onClear } = props
  const ref = useRef<HTMLDivElement>(null)

  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState(props.value)
  const [actionVisible, setActionVisible] = useState(false)

  useEffect(() => {
    !focused && setActionVisible(false)
    const animation = anime({
      targets: ref.current?.querySelector('input'),
      width:  clearable && (focused || value) ? '86%' : '100%',
      easing: ANIME.spring.noWobble,
      update: (animation) => {
        animation.progress > 70 && focused && setActionVisible(true)
      }
    })
    // clearable && anime({
    //   targets: ref.current?.querySelector('svg'),
    //   right: focused ? '4em' : '1em',
    //   easing: ANIME.spring.noWobble
    // })

    return () => {
      animation.update = () => { }
    }
  }, [clearable, focused, value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore 判断为输入状态而非其他的无输入或回退状态
    if (/insert/.test(e.nativeEvent.inputType) && e.nativeEvent.inputType !== 'insertFromPaste') {
      // @ts-ignore 屏蔽不符合正则的字符集的输入
      if (re && !re.test(e.nativeEvent.data)) {
        return e.preventDefault()
      }
    }

    setValue(e.target.value)
    onChange && onChange(e)
  }

  const mergeProps = {
    ...props,
    value: props.value ? props.value : value,
    onChange: handleChange
  }

  const handleClear = () => {
    setValue('')
    onClear && onClear()
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true)
    onFocus && onFocus(e)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(false)
    onBlur && onBlur(e)
  }

  return (
    <Container ref={ref}>
      <StyledInput
        {...mergeProps}
        onFocus={handleFocus}
        onBlur={handleBlur} />
      {clearable && value &&
        <Suffix
          type='clear'
          fill={lighten(0.8, '#000')}
          onClick={handleClear} />}
      {actionVisible && action}
      {prefix && <Prefix type={prefix} fill={lighten(0.8, '#000')} />}
    </Container>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  re?: RegExp
  layout?: 'primary' | 'none'
  clearable?: boolean
  prefix?: IconType
  action?: ReactNode
  onClear?: () => void
}

export default Input
