import { lighten } from 'polished'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as CheckedIcon } from '../assets/check_circel_active.svg'
import { theme } from '../config'

const RadioDot = styled.div<{ checked: boolean, iconWidth?: number }>`
  display: inline-block;
  border: ${props => props.checked ? 'none' : `1px solid ${lighten(0.8, '#000')}`};
  width: ${props => props.iconWidth || 2.3}rem;
  height: ${props => props.iconWidth || 2.3}rem;
  border-radius: ${props => props.iconWidth ? props.iconWidth / 2 : 1.15}rem;
  margin: 0 0.5em;
  vertical-align: text-bottom;
  svg {
    width: 100%;
    margin: 0;
  }
`

const StyledLabel = styled.label<{ iconWidth?: number }>`
  line-height: ${props => props.iconWidth || 2.3}rem;
  height: ${props => props.iconWidth || 2.3}rem;
  cursor: pointer;
`

const Radio = (props: RadioProps) => {

  const handleClick = () => {
    props.onClick()
  }

  return (
    <StyledLabel onClick={handleClick} iconWidth={props.iconWidth}>
      <RadioDot checked={props.checked} iconWidth={props.iconWidth}>
        {props.checked && <CheckedIcon fill={theme.colors.primary} />}
      </RadioDot>
      <span>{props.label}</span>
    </StyledLabel>
  )
}

const Group = styled.div`
    
`

export default Radio

export const RadioGroup = (props: RadioGroupProps) => {
  const { value, iconWidth, radioOptions, onChange,disabled } = props
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    if (value !== undefined) {
      let index = radioOptions.findIndex((r) => r.value === value)
      setIndex(index)
    }
  }, [radioOptions, value])

  const handleClick = (i: number) => {
    if(  !disabled ){
      setIndex(i)
      onChange && onChange(props.radioOptions[i])
    }
  }

  return (
    <Group>
      {radioOptions.map((item, i) => {
        return (
          <Radio key={item.value} label={item.label} value={item.value} checked={index === i}
            onClick={() => handleClick(i)} iconWidth={iconWidth} />
        )
      })}
    </Group>
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
  disabled:boolean
  radioOptions: Radio[]
  onChange?: (radio: Radio) => void
  iconWidth?: number
  value?: number | string
}
RadioGroup.defaultProps = {
  disabled:false
}