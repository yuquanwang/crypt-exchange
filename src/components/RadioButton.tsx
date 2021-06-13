import { lighten } from 'polished'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as CheckedIcon } from '../assets/check_circel_active.svg'
import { theme } from '../config'


const Radio = (props: RadioProps) => {

  const RadioEl = styled.button<{ checked: boolean }>`
    color:${props => props.checked ?  `white`: '#666666'};
    background-color:${props => props.checked ?  `#12CD9F`: '#F5F5F5'};
    background-image:none;
    font-weight:bold;
  `

  const handleClick = () => {
    props.onClick && props.onClick()
  }

  return (
      <RadioEl checked={props.checked} onClick={  ()=>handleClick() } >
        {props.label}
      </RadioEl>
  )
}
export default Radio

export const RadioGroup = (props:RadioGroupProps) => {
  const { value, radioOptions, onChange } = props
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    if (value !== undefined) {
      let index = radioOptions.findIndex((r) => r.value === value)
      setIndex(index)
    }
  }, [radioOptions, value])

  const handleClick = (i: number) => {
    if( props.allowCheckValue && props.allowCheckValue){
      setIndex(i)
      onChange && onChange(props.radioOptions[i])
    }else{
      props.disableFun && props.disableFun()
    }
  }

  return (
    <div>
      {radioOptions.map((item, i) => {
        return (
          <Radio key={item.value} label={item.label} value={item.value} checked={index === i}
            onClick={() => handleClick(i)} />
        )
      })}
    </div>
  )
}

interface RadioProps {
  label?: string
  value: string | number
  checked: boolean
  onClick(): void
  iconWidth?: number
}

interface Radio {
  label: string
  value: string | number
}

interface RadioGroupProps {
  radioOptions: Radio[]
  allowCheckValue?:boolean
  onChange?: (radio: Radio) => void
  value?: number | string
  disableFun?: Function
}
 