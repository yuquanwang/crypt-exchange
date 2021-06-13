import React, {
  InputHTMLAttributes, ReactNode, ChangeEventHandler, useRef, useState, KeyboardEventHandler,
} from 'react'
import styled, { css } from 'styled-components'

const InputWrapper = styled.div<{ valid: boolean, max?: string, placeholder?: string }>`
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border-radius: 2em;
  border: 1px solid ${props => props.theme.colors.gray};
  ${props => !props.valid && css`
    box-shadow: ${props => props.theme.colors.red} 0px 0px 1.5px 1px;
  `}
  &>div {
    display: inline-flex;
    height: 3em;
    align-items: center;
    padding: 0.5em;
  }
  input {
    width: 100%;
    border-radius: 0;
    :invalid {
      box-shadow: none;
    }
  }
  input[type=number] { 
    width: ${
  props => Math.max(4, props.placeholder?.length || 0, props.max?.length || 0) + 2 + 'em'};
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Input = (props: InputProps) => {
  const ref = useRef<HTMLInputElement>()
  const wrapper = useRef<HTMLDivElement>()
  const [valid, setValid] = useState(true)
  const {
    prefix, suffix, value, type, list, className, pattern, example, onChange,
    ...others
  } = props

  // 某些类型屏蔽掉list使用
  const canUseList = () => {
    switch (type) {
      case 'number': return false
      default: return true
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // @ts-ignore 确定是完整输入的状态
    if (example && /insert/.test(e.nativeEvent.inputType) && !e.nativeEvent.isComposing) {
      // @ts-ignore 
      let fallback = e.target.value.replace(new RegExp(`${e.nativeEvent.data}$`), '')
      let re = new RegExp(`^.{${e.target.value.length}}`)
      let expect = example.replace(re, e.target.value)

      // 屏蔽非法输入
      if (!pattern.test(expect)) {
        e.target.value = fallback
      }

      setValid(ref.current.checkValidity())
    }

    onChange && onChange(e)
  }

  // 拦截单字符的非法输入
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key.length === 1) {
      type === 'number' && !/^[0-9.]$/.test(e.key) && e.preventDefault()
      type === 'tel' && !/^[0-9-+]$/.test(e.key) && e.preventDefault()
    }
  }

  return (
    <InputWrapper ref={wrapper} className={className}
      placeholder={props.placeholder}
      max={props.type === 'number' && props.max ? props.max.toString() : undefined} valid={valid}>
      {prefix && <div>{prefix}</div>}
      <input ref={ref}
        type={type} value={value} list={canUseList() ? list : undefined} pattern={pattern?.source}
        {...others} onChange={handleChange} onKeyDown={handleKeyDown} />
      {suffix && <div>{suffix}</div>}
    </InputWrapper>
  )
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'pattern'> {
  type?: 'text' | 'tel' | 'email' | 'url' | 'password' | 'search' | 'number'
  value?: string
  prefix?: ReactNode // input前缀组件
  suffix?: ReactNode // input后缀组件
  pattern?: RegExp // pattern直接使用正则表达式而不是字符串
  example?: string // 传该值时可以输入跟随动态屏蔽与pattern不符的非法输入
}

export default Input